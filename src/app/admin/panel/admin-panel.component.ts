import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationBarService} from '../../http-client/navigation-bar.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  node;
  constructor(private router: Router,
              private routeSub: ActivatedRoute,
              private navigationBarService: NavigationBarService){ }

  ngOnInit() {
    this.routeSub.params.subscribe((param) => {
      this.node = param['nodeId'];
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

  deleteNode() {
    this.navigationBarService.deleteNode(this.node).subscribe();
  }
}
