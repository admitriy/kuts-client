import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  node = false;
  constructor(private router: Router,
              private routeSub: ActivatedRoute){ }

  ngOnInit() {
  }

  addNodeNavigate() {
    this.routeSub.params.subscribe((param) => {
      const navigate = param['nodeId'] ? ['panel/add-node', param.nodeId] : ['panel/add-node'];
      this.router.navigate(navigate);
    });
  }
}
