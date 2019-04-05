import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import { NavigationBarService } from '../http-client/navigation-bar.service';
import { GetNavigationBarItemsResponse } from '../http-client/response/get-navigation-bar-items-response';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    private navigationBarService: NavigationBarService,
    private router: Router
  ) { }

  response: GetNavigationBarItemsResponse[] = [];

  treeControl = new NestedTreeControl<GetNavigationBarItemsResponse>(node => node.children);
  dataSource = new MatTreeNestedDataSource<GetNavigationBarItemsResponse>();
  selectedNode = null;

  fileFormats = {
    PDF: 'pdf-viewer',
    FLESH: 'flesh-viewer',
    HTML: 'html-viewer'
  };
  hasChild = (_: number, node: GetNavigationBarItemsResponse) => !!node.children && node.children.length > 0;

  getNavigationBarItems() {
    return this.navigationBarService.getItems().subscribe(
      (response) => {
        console.log(response);
        this.response = response;
        this.dataSource.data = response;
      }
    );
  }

  ngOnInit(): void {
    this.getNavigationBarItems();
  }

  getSelectedNode(node: GetNavigationBarItemsResponse, event: any) {
      this.selectedNode = node;
      const content = this.selectedNode.content;
      if ((!content.content) || (!content.contentType)) {
        return;
      }
      this.router.navigate(['/' + this.fileFormats[content.contentType], this.selectedNode.id]);
  }
}
