import {Component, Injectable, OnInit} from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';

import { NavigationBarService } from '../http-client/navigation-bar.service';
import { GetNavigationBarItemsResponse } from '../http-client/response/get-navigation-bar-items-response';
import {Router} from '@angular/router';
import {DataSelectedNotificationService} from '../shared-services/data-selected-notification.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class NavigationBarComponent implements OnInit {
  currentTarget;

  constructor(
    private navigationBarService: NavigationBarService,
    private router: Router,
    private dataSelectedNotificationService: DataSelectedNotificationService
  ) { }

  treeControl = new NestedTreeControl<GetNavigationBarItemsResponse>(node => node.children);
  selectedNode = null;

  fileFormats = {
    PDF: 'pdf-viewer',
    FLESH: 'flesh-viewer',
    HTML: 'html-viewer'
  };

  hasChild = (_: number, node: GetNavigationBarItemsResponse) => !!node.children && node.children.length > 0;

  getNavigationBarItems() {
    this.dataSelectedNotificationService.getNavigationBarItems();
  }

  ngOnInit(): void {
    this.getNavigationBarItems();
  }

  getSelectedNode(node: GetNavigationBarItemsResponse, event: any) {
    if (this.currentTarget) {
      this.currentTarget.style.textDecoration = 'none';
    }

    this.currentTarget = event.target;
    this.currentTarget.style.textDecoration = 'underline';
    const rootRout = this.router.url.split('/')[1];
    this.selectedNode = node;
    if (rootRout === 'panel') {
      this.router.navigate(['/panel/node', this.selectedNode.id]);
    } else {
      this.router.navigate(['/content', this.selectedNode.id]);
    }
  }
}
