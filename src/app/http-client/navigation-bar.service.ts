import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { GetNavigationBarItemsResponse } from '../http-client/response/get-navigation-bar-items-response';
import {NavigationBarItemContent} from './response/content/navigation-bar-item-content';
import {ItemNodeTest} from './response/test/item-node-test';
import {ItemTestValidate} from './response/test/item-test-validate';
import {AppSettings} from '../constants/AppSettings';
import {Group} from "./response/auth/group";
import {Auth} from "./response/auth/auth";
import {Register} from "./response/auth/register";
import {Token} from "./response/auth/token";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class NavigationBarService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  private baseUrl: string = 'http://localhost:8084/api/1/';

  getItems() {
    return this.http.get<GetNavigationBarItemsResponse[]>(AppSettings.API + 'node/findAll', this.getAuthourisationHeader());
  }

  getNodeByNodeId(id: string) {
    return this.http.get<GetNavigationBarItemsResponse>(AppSettings.API + 'node/' + id, this.getAuthourisationHeader());
  }

  getTest(id: string) {
    return this.http.get<ItemNodeTest>(AppSettings.API + 'test/' + id, this.getAuthourisationHeader());
    return this.http.get<ItemNodeTest>(AppSettings.API + 'test/' + id);
  }

  getPassTest(id: string) {
    return this.http.get<ItemNodeTest>(AppSettings.API + 'test/' + id + '/start');
  }

  validateTest(id: string, test: ItemNodeTest) {
    return this.http.post<ItemTestValidate>(AppSettings.API + 'test/' + id + '/validate', test);
  }

  getContentByNodeId(id: string) {
    return this.http.get<NavigationBarItemContent>(AppSettings.API + 'content/' + id, this.getAuthourisationHeader());
  }

  saveNode(node: GetNavigationBarItemsResponse) {
    return this.http.post<GetNavigationBarItemsResponse>(AppSettings.API + 'node/', node, this.getAuthourisationHeader());
  }

  saveContent(content: NavigationBarItemContent) {
    return this.http.post<NavigationBarItemContent>(AppSettings.API + 'content/', content, this.getAuthourisationHeader());
  }

  saveTest(test: ItemNodeTest) {
    return this.http.post<ItemNodeTest>(AppSettings.API + 'test/', test, this.getAuthourisationHeader());
  }

  updateNode(node: GetNavigationBarItemsResponse) {
    return this.http.put<GetNavigationBarItemsResponse>(AppSettings.API + 'node/', node, this.getAuthourisationHeader());
  }

  deleteNode(nodeId: any) {
    return this.http.delete(AppSettings.API + 'node/' + nodeId, this.getAuthourisationHeader());
  }

  uploadFile(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    const headers = new HttpHeaders({'enctype': 'multipart/form-data'});

    return this.http.post<string>(AppSettings.API + 'file/', formData, {headers: headers});
  }

  deleteFile(fileId: any) {
    return this.http.delete(this.baseUrl + 'file/' + fileId, this.getAuthourisationHeader());
  }

  getAllGroups() {
    return this.http.get<Group[]>(this.baseUrl + 'group/list');
  }

  authorization(auth: Auth) {
    return this.http.post<Token>(this.baseUrl + 'user/auth', auth);
  }

  registration(register: Register) {
    return this.http.post<Token>(this.baseUrl + 'user/register', register);
  }

  getAuthourisationHeader() {
    return {headers: new HttpHeaders({'Authorization': this.cookieService.get("kuts-token")})};
  }
}
