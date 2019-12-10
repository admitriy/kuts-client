import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {GetNavigationBarItemsResponse} from '../../http-client/response/get-navigation-bar-items-response';
import {NavigationBarItemContent} from '../../http-client/response/content/navigation-bar-item-content';
import {ActivatedRoute} from '@angular/router';
import {NavigationBarComponent} from '../../navigation-bar/navigation-bar.component';
import {DataSelectedNotificationService} from '../../shared-services/data-selected-notification.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.css']
})
export class AddNodeComponent implements OnInit {
  node: GetNavigationBarItemsResponse;

  constructor(private location: Location,
              private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute,
              private dataSelectedNotificationService: DataSelectedNotificationService) { }

  ngOnInit() {
    this.node = {} as GetNavigationBarItemsResponse;
    this.routeSub.params.subscribe((param) => {
      if (param.parentId) {
        this.node.parentNode = param.parentId;
      } else if (param.nodeId) {
        this.navigationBarService.getNodeByNodeId(param.nodeId).subscribe(node => this.node = node);
      }
    });
  }


  save() {
    this.navigationBarService.saveNode(this.node).subscribe(e => {
      this.dataSelectedNotificationService.getNavigationBarItems();
      this.back();
    });
  }

  back() {
    this.location.back();
  }
}
