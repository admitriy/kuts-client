import {Route} from '@angular/router';
import {ContentComponent} from './content.component';

export const ContentRoute: Route = {
  path: 'content/:nodeId/:hasTest',
  component: ContentComponent,
  data: {
    pageTitle: 'Просмотр content'
  }
};
