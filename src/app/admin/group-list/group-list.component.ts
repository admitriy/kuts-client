import {Component, OnInit} from '@angular/core';
import {NavigationBarService} from '../../http-client/navigation-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../http-client/response/auth/group';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  dataSource: Group[];
  displayedColumns: string[] = ['name', 'student', 'edit', 'delete'];



  constructor(private navigationBarService: NavigationBarService,
              private routeSub: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
      this.getGroups();
  }

  addGroupNavigate(param) {
    this.router.navigate(['panel/add-group/', param]);
  }

  userListNavigate(param) {
    this.router.navigate(['panel/user-list/', param]);
  }


  deleteGroup(param) {
    this.navigationBarService.deleteGroup(param).subscribe(g => {
      this.getGroups();
    });
  }

  getGroups() {
    this.navigationBarService.getAllGroups().subscribe(g => {
      this.dataSource = g;
    });
  }
}
