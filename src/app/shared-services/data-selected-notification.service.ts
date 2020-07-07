import { Injectable } from '@angular/core';
import {GetNavigationBarItemsResponse} from '../http-client/response/get-navigation-bar-items-response';
import {NavigationBarService} from '../http-client/navigation-bar.service';
import {MatTreeNestedDataSource} from '@angular/material';
import {NestedTreeControl} from '@angular/cdk/tree';

@Injectable({
  providedIn: 'root'
})
export class DataSelectedNotificationService {
  public barManu: GetNavigationBarItemsResponse[] = [];
  public dataSource = new MatTreeNestedDataSource<GetNavigationBarItemsResponse>();
  public treeControl = new NestedTreeControl<GetNavigationBarItemsResponse>(node => node.children);

  constructor(private navigationBarService: NavigationBarService) { }

  getNavigationBarItems() {
    return this.navigationBarService.getItems().subscribe(
      (response) => {
        this.barManu = response;
        this.dataSource.data = this.barManu;
        this.treeControl.dataNodes = this.dataSource.data;
        this.treeControl.expandAll();
      }
    );
  }
}
