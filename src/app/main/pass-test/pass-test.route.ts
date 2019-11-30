import {Route} from '@angular/router';
import {PassTestComponent} from './pass-test.component';

export const PassTestRoute: Route = {
  path: 'test/:nodeId',
  component: PassTestComponent,
  data: {
    pageTitle: 'Просмотр test'
  }
};
