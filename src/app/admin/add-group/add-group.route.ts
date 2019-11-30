import {Route} from '@angular/router';
import {AddTestComponent} from '../add-test/add-test.component';
import {AddGroupComponent} from './add-group.component';

export const AddGroupRoute: Route = {
  path: 'panel/add-group/:groupId',
  component: AddGroupComponent,
  data: {
    pageTitle: 'Просмотр add group'
  }
}
