import {Route, Routes} from '@angular/router';

import {Mp4ViewerComponent} from './mp4-viewer.component';

export const Mp4ViewerRoute: Route = {
  path: 'mp4-viewer/:nodeId',
  component: Mp4ViewerComponent,
  data: {
    pageTitle: 'Просмотр pdf файла'
  }
};
