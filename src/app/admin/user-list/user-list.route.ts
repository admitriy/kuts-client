import {Route} from '@angular/router';
import {AddTestComponent} from '../add-test/add-test.component';
import {UserListComponent} from './user-list.component';

export const UserListRoute: Route = {
  path: 'panel/user-list/:groupId',
  component: UserListComponent,
  data: {
    pageTitle: 'Просмотр групп'
  }
}
