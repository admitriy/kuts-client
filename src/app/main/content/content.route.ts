import {Route} from '@angular/router';
import {ContentComponent} from './content.component';

export const ContentRoute: Route = {
  path: 'content/:nodeId/:content/:contentType/:executeFile/:hasTest',
  component: ContentComponent,
  data: {
    pageTitle: 'Просмотр content'
  }
};
