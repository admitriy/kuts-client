import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { GetNavigationBarItemsResponse } from '../http-client/response/get-navigation-bar-items-response';
import {NavigationBarItemContent} from './response/content/navigation-bar-item-content';
import {ItemNodeTest} from './response/test/item-node-test';
import {ItemTestValidate} from './response/test/item-test-validate';
import {AppSettings} from '../constants/AppSettings';

@Injectable({
  providedIn: 'root'
})

export class NavigationBarService {
  constructor(
    private http: HttpClient
  ) {
  }

  getItems() {
    return this.http.get<GetNavigationBarItemsResponse[]>(AppSettings.API + 'node/findAll');
  }

  getNodeByNodeId(id: string) {
    return this.http.get<GetNavigationBarItemsResponse>(AppSettings.API + 'node/' + id);
  }

  getTest(id: string) {
    return this.http.get<ItemNodeTest>(AppSettings.API + 'test/' + id);
  }

  getPassTest(id: string) {
    return this.http.get<ItemNodeTest>(AppSettings.API + 'test/' + id + '/start');
  }

  validateTest(id: string, test: ItemNodeTest) {
    return this.http.post<ItemTestValidate>(AppSettings.API + 'test/' + id + '/validate', test);
  }

  getContentByNodeId(id: string) {
    return this.http.get<NavigationBarItemContent>(AppSettings.API + 'content/' + id);
  }

  saveNode(node: GetNavigationBarItemsResponse) {
    return this.http.post<GetNavigationBarItemsResponse>(AppSettings.API + 'node/', node);
  }

  saveContent(content: NavigationBarItemContent) {
    return this.http.post<NavigationBarItemContent>(AppSettings.API + 'content/', content);
  }

  saveTest(test: ItemNodeTest) {
    return this.http.post<ItemNodeTest>(AppSettings.API + 'test/', test);
  }

  updateNode(node: GetNavigationBarItemsResponse) {
    return this.http.put<GetNavigationBarItemsResponse>(AppSettings.API + 'node/', node);
  }

  deleteNode(nodeId: any) {
    return this.http.delete(AppSettings.API + 'node/' + nodeId);
  }

  uploadFile(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    const headers = new HttpHeaders({'enctype': 'multipart/form-data'});

    return this.http.post<string>(AppSettings.API + 'file/', formData, {headers: headers});
  }

  deleteFile(fileId: any) {
    return this.http.delete(AppSettings.API + 'file/' + fileId);
  }
}

