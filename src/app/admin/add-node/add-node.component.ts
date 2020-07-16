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
  orders: string[] = [];

  constructor(private location: Location,
              private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute,
              private dataSelectedNotificationService: DataSelectedNotificationService) { }

  ngOnInit() {
    this.node = {} as GetNavigationBarItemsResponse;
    this.routeSub.params.subscribe((param) => {
      if (param.parentId || !param.nodeId) {
        this.navigationBarService.nodeOrder(param.parentId).subscribe(e => {
          this.createOrders(e);
          this.orders.push( String(e + 1) );
          this.node.orderNode = String(e + 1);
          this.node.parentNode = param.parentId;
        });
      } else if (param.nodeId) {
        this.navigationBarService.getNodeByNodeId(param.nodeId).subscribe(node => {
          this.navigationBarService.nodeOrder(node.parentNode).subscribe(e => {
            this.createOrders(e);
            this.node = node;
            this.node.orderNode = this.orders.filter(elem => elem === String(this.node.orderNode))[0];
          });
        });
      }
    });
  }

  createOrders(order: number) {
    for (let i = 1; i <= order; i++) {
      this.orders.push(String(i));
    }
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
