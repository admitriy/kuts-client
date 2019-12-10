import { Injectable } from '@angular/core';
import {GetNavigationBarItemsResponse} from '../http-client/response/get-navigation-bar-items-response';
import {NavigationBarService} from '../http-client/navigation-bar.service';
import {MatTreeNestedDataSource} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DataSelectedNotificationService {
  public barManu: GetNavigationBarItemsResponse[] = [];
  public dataSource = new MatTreeNestedDataSource<GetNavigationBarItemsResponse>();
  constructor(private navigationBarService: NavigationBarService) { }

  getNavigationBarItems() {
    return this.navigationBarService.getItems().subscribe(
      (response) => {
        console.log(response);
        this.barManu = response;
        this.dataSource.data = this.barManu;
      }
    );
  }
}
