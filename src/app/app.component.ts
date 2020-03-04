import {Component, OnInit} from '@angular/core';
import {Auth} from './http-client/response/auth/auth';
import {Register} from './http-client/response/auth/register';
import {Group} from './http-client/response/auth/group';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationBarService} from './http-client/navigation-bar.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kutc-client';
  isAuthorized = false;
  auth: Auth = {} as Auth;
  register: Register = {} as Register;
  groups: Group[];

  constructor(
    private routeSub: ActivatedRoute,
    private navigationBarService: NavigationBarService,
    private cookieService: CookieService,
    private router: Router) {
  }


  ngOnInit(): void {
    if (this.cookieService.get('kuts-token')) {
      this.isAuthorized = true;
    }

    this.register.group = {} as Group;
    this.navigationBarService.getAllGroups().subscribe(groups => {
      this.groups = groups;
    });
  }

  authorizarion() {
    this.navigationBarService.authorization(this.auth).subscribe(token => {
      this.cookieService.set('kuts-token', token.token);
      this.cookieService.set('kuts-role', token.role);
      this.isAuthorized = true;
    });
  }

  registration() {
    this.navigationBarService.registration(this.register).subscribe(token => {
      this.cookieService.set('/kuts-token', token.token);
      this.cookieService.set('/kuts-role', token.role);
      this.isAuthorized = true;
    });
  }

  exit() {
    this.router.navigate(['/']);
    this.cookieService.deleteAll();
    this.isAuthorized = false;
  }

  isAdmin() {
    return this.cookieService.get('kuts-role') === 'ADMIN';
  }
}
