import {Route, Routes} from '@angular/router';

import {FlashViewerComponent} from './flash-viewer.component';

export const FlashViewerRoute: Route = {
  path: 'flesh-viewer/:nodeId',
  component: FlashViewerComponent,
  data: {
    pageTitle: 'Просмотр flash файла'
  }
};
