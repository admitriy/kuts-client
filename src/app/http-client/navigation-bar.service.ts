import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { GetNavigationBarItemsResponse } from '../http-client/response/get-navigation-bar-items-response';

@Injectable({
  providedIn: 'root'
})

export class NavigationBarService {
  constructor(
    private http: HttpClient
  ) {
  }

  private baseUrl: string = 'http://18.222.201.152:8084/api/1/';

  getItems() {
    return this.http.get<GetNavigationBarItemsResponse[]>(this.baseUrl + 'node/findAll');
  }

  getItem(id: string) {
    return this.http.get<GetNavigationBarItemsResponse>(this.baseUrl + 'node/' + id);
  }

  uploadFile(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    const headers = new HttpHeaders({'enctype': 'multipart/form-data'});

    return this.http.post(this.baseUrl + 'file/', formData, {headers: headers});
  }

  saveNode(node: GetNavigationBarItemsResponse) {
    return this.http.post<GetNavigationBarItemsResponse>(this.baseUrl + 'node/', node);
  }
}

