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
import {User} from './response/auth/user';
import {TestResult} from './response/test/test-result';
import {DataSelectedNotificationService} from '../shared-services/data-selected-notification.service';

@Injectable({
  providedIn: 'root'
})

export class NavigationBarService {
  public kutsRole: string;
  public kutsToken: string;

  constructor(
    private http: HttpClient,
  ) {
  }

  getItems() {
    return this.http.get<GetNavigationBarItemsResponse[]>(AppSettings.API + 'node/findAll', this.getAuthourisationHeader());
  }

  getNodeByNodeId(id: string) {
    return this.http.get<GetNavigationBarItemsResponse>(AppSettings.API + 'node/' + id, this.getAuthourisationHeader());
  }

  getTest(id: string) {
    return this.http.get<ItemNodeTest>(AppSettings.API + 'test/' + id, this.getAuthourisationHeader());
  }

  getGroup(id: string) {
    return this.http.get<Group>(AppSettings.API + 'group/' + id, this.getAuthourisationHeader());
  }

  getUsersByGroupId(id: string) {
    return this.http.get<User[]>(AppSettings.API + 'user/group/' + id, this.getAuthourisationHeader());
  }

  getTestResultByUserID(id: string) {
    return this.http.get<TestResult[]>(AppSettings.API + 'test/testResult/' + id, this.getAuthourisationHeader());
  }

  getPassTest(id: string) {
    return this.http.get<ItemNodeTest>(AppSettings.API + 'test/' + id + '/start', this.getAuthourisationHeader());
  }

  validateTest(id: string, test: ItemNodeTest) {
    return this.http.post<ItemTestValidate>(AppSettings.API + 'test/' + id + '/validate', test, this.getAuthourisationHeader());
  }

  getContentByNodeId(id: string) {
    return this.http.get<NavigationBarItemContent>(AppSettings.API + 'content/' + id, this.getAuthourisationHeader());
  }

  saveNode(node: GetNavigationBarItemsResponse) {
    return this.http.post<GetNavigationBarItemsResponse>(AppSettings.API + 'node/', node, this.getAuthourisationHeader());
  }

  saveGroup(group: Group) {
    return this.http.post<Group>(AppSettings.API + 'group/', group, this.getAuthourisationHeader());
  }

  saveContent(content: NavigationBarItemContent) {
    return this.http.post<NavigationBarItemContent>(AppSettings.API + 'content/', content, this.getAuthourisationHeader());
  }

  removeContentEntity(contentId: string) {
    return this.http.delete(AppSettings.API + 'content/' + contentId, this.getAuthourisationHeader());
  }

  saveTest(test: ItemNodeTest) {
    return this.http.post<ItemNodeTest>(AppSettings.API + 'test/', test, this.getAuthourisationHeader());
  }

  removeTest(testId: string) {
    return this.http.delete(AppSettings.API + 'test/' + testId, this.getAuthourisationHeader());
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
    const headers = new HttpHeaders({'enctype': 'multipart/form-data', 'Authorization': this.kutsToken});

    return this.http.post<string>(AppSettings.API + 'file/', formData, {headers: headers});
  }

  deleteFile(fileId: any) {
    return this.http.delete(AppSettings.API + 'file/' + fileId, this.getAuthourisationHeader());
  }

  deleteGroup(groupId: any) {
    return this.http.delete(AppSettings.API + 'group/' + groupId, this.getAuthourisationHeader());
  }

  getAllGroups() {
    return this.http.get<Group[]>(AppSettings.API + 'group/list');
  }

  authorization(auth: Auth) {
    return this.http.post<Token>(AppSettings.API + 'user/auth', auth);
  }

  registration(register: Register) {
    return this.http.post<Token>(AppSettings.API + 'user/register', register);
  }

  getAuthourisationHeader() {
    return {headers: new HttpHeaders({'Authorization': this.kutsToken})};
  }
}
