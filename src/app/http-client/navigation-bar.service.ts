import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { GetNavigationBarItemsResponse } from '../http-client/response/get-navigation-bar-items-response';
import {NavigationBarItemContent} from './response/content/navigation-bar-item-content';
import {ItemNodeTest} from './response/test/item-node-test';

@Injectable({
  providedIn: 'root'
})

export class NavigationBarService {
  constructor(
    private http: HttpClient
  ) {
  }

  private baseUrl: string = 'http://localhost:8084/api/1/';

  getItems() {
    return this.http.get<GetNavigationBarItemsResponse[]>(this.baseUrl + 'node/findAll');
  }

  getNodeByNodeId(id: string) {
    return this.http.get<GetNavigationBarItemsResponse>(this.baseUrl + 'node/' + id);
  }

  getTest(id: string) {
    return this.http.get<ItemNodeTest>(this.baseUrl + 'test/' + id);
  }

  getContentByNodeId(id: string) {
    return this.http.get<NavigationBarItemContent>(this.baseUrl + 'content/' + id);
  }

  saveNode(node: GetNavigationBarItemsResponse) {
    return this.http.post<GetNavigationBarItemsResponse>(this.baseUrl + 'node/', node);
  }

  saveContent(content: NavigationBarItemContent) {
    return this.http.post<NavigationBarItemContent>(this.baseUrl + 'content/', content);
  }

  saveTest(test: ItemNodeTest) {
    return this.http.post<ItemNodeTest>(this.baseUrl + 'test/', test);
  }

  updateNode(node: GetNavigationBarItemsResponse) {
    return this.http.put<GetNavigationBarItemsResponse>(this.baseUrl + 'node/', node);
  }

  deleteNode(nodeId: any) {
    return this.http.delete(this.baseUrl + 'node/' + nodeId);
  }

  uploadFile(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    const headers = new HttpHeaders({'enctype': 'multipart/form-data'});

    return this.http.post<string>(this.baseUrl + 'file/', formData, {headers: headers});
  }

  deleteFile(fileId: any) {
    return this.http.delete(this.baseUrl + 'file/' + fileId);
  }
}

