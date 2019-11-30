import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../../http-client/response/auth/group';

@Component({
  selector: 'app-group-panel',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  group: Group;

  constructor(private location: Location,
              private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute) { }

  ngOnInit() {
    this.group = {} as Group;
    this.routeSub.params.subscribe((param) => {
      if (param.groupId) {
        this.navigationBarService.getGroup(param.groupId).subscribe(group => {
          if (group) {
            this.group = group;
          }
        });
      }
    });
  }

  save() {
    this.navigationBarService.saveGroup(this.group).subscribe(e => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }
}
