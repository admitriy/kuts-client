import {Route} from '@angular/router';
import {AddTestComponent} from '../add-test/add-test.component';
import {GroupListComponent} from './group-list.component';

export const GroupListRoute: Route = {
  path: 'panel/group-list',
  component: GroupListComponent,
  data: {
    pageTitle: 'Просмотр групп'
  }
}
