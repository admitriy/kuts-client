import {Component, OnInit} from '@angular/core';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../http-client/response/auth/group';
import {User} from '../../http-client/response/auth/user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dataSource: User[];
  displayedColumns: string[] = ['name', 'result'];

  constructor(private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getUsers();
  }

  showResults(param) {
    this.router.navigate(['panel/test-result/', param]);
  }

  getUsers() {
    this.routeSub.params.subscribe((param) => {
      if (param.groupId) {
        this.navigationBarService.getUsersByGroupId(param.groupId).subscribe(users => {
          if (users) {
            this.dataSource = users;
          }
        });
      }
    });
  }
}
