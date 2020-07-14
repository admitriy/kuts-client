import {Route, Routes} from '@angular/router';

import {ZipViewerComponent} from './zip-viewer.component';

export const ZipViewerRoute: Route = {
  path: 'zip-viewer/:nodeId',
  component: ZipViewerComponent,
  data: {
    pageTitle: 'Просмотр zip файла'
  }
};
