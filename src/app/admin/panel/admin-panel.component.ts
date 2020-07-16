import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {DataSelectedNotificationService} from '../../shared-services/data-selected-notification.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  node;
  constructor(private router: Router,
              private routeSub: ActivatedRoute,
              private navigationBarService: NavigationBarService,
              public dataSelectedNotificationService: DataSelectedNotificationService,
              private _snackBar: MatSnackBar){ }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.node = param['nodeId'];
      if (!this.node) {
        this.dataSelectedNotificationService.getNavigationBarItems();
      }
    });
  }

  addNodeNavigate() {
    const navigate = this.node ? ['panel/add-node', this.node] : ['panel/add-node'];
    this.router.navigate(navigate);
  }

  updateNodeNavigate() {
    this.router.navigate(['panel/edit-node', this.node]);
  }

  addContentNavigate() {
    this.router.navigate(['panel/add-content', this.node]);
  }

  addTestNavigate() {
    this.router.navigate(['panel/add-test', this.node]);
  }

  deleteNode() {
    this.navigationBarService.deleteNode(this.node).subscribe(() => {
      this.dataSelectedNotificationService.getNavigationBarItems();
      this.node = null;
    }, error => {
      this.openSnackBar(error.error.message, 'OK');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
