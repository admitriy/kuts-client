import {Route} from '@angular/router';
import {AddTestComponent} from './add-test.component';

export const AddTestRoute: Route = {
  path: 'panel/add-test/:nodeId',
  component: AddTestComponent,
  data: {
    pageTitle: 'Просмотр add content'
  }
}
