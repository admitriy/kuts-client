import {Component, Injectable, OnInit} from '@angular/core';

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
export class NavigationBarComponent implements OnInit{
  currentTarget;

  constructor(
    private navigationBarService: NavigationBarService,
    private router: Router,
    public dataSelectedNotificationService: DataSelectedNotificationService
  ) { }

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
    console.log(!(node.hasTest || node.hasContent || this.isPanel()));
    if (this.currentTarget) {
      this.currentTarget.style.background = 'white';
    }
    this.currentTarget = event.currentTarget;
    this.currentTarget.style.background = '#f1efef';
    this.selectedNode = node;
    if (this.isPanel()) {
      this.router.navigate(['/panel/node', this.selectedNode.id]);
    } else {
      this.router.navigate(['/content', this.selectedNode.id]);
    }
  }

  isPanel() {
    return this.router.url.split('/')[1] === 'panel';
  }
}
