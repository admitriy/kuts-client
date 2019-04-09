import {Route, Routes} from '@angular/router';

import {HtmlViewerComponent} from './html-viewer.component';

export const HtmlViewerRoute: Route = {
  path: 'html-viewer/:nodeId',
  component: HtmlViewerComponent,
  data: {
    pageTitle: 'Просмотр html файла'
  }
};
