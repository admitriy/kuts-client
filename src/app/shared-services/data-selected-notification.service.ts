import {ApplicationRef, Injectable} from '@angular/core';
import {GetNavigationBarItemsResponse} from '../http-client/response/get-navigation-bar-items-response';
import {NavigationBarService} from '../http-client/navigation-bar.service';
import {MatTreeNestedDataSource} from '@angular/material';
import {NestedTreeControl} from '@angular/cdk/tree';
import {remote} from 'electron';
import {AppSettings} from '../constants/AppSettings';
import {ipcRenderer} from 'electron';

@Injectable({
  providedIn: 'root'
})
export class DataSelectedNotificationService {
  public barManu: GetNavigationBarItemsResponse[] = [];
  public dataSource = new MatTreeNestedDataSource<GetNavigationBarItemsResponse>();
  public treeControl = new NestedTreeControl<GetNavigationBarItemsResponse>(node => node.children);
  public online = true;

  constructor(private navigationBarService: NavigationBarService) { }

  getNavigationBarItems() {
    // return this.online ? this.getFromServer() : this.getFromFile();
    return this.getFromServer();
  }

  getFromServer() {
    return this.navigationBarService.getItems(this.online, remote.app.getAppPath()).subscribe(
      (response) => {
        this.barManu = response;
        this.dataSource.data = this.barManu;
        ipcRenderer.send('findAllSave', {
          json: response
        });
      }
    );
  }
}
