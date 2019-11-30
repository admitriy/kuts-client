import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {ContentRoute} from './content/content.route';
import {AddNodeRoute} from '../admin/add-node/add-node.route';
import {PdfViewerRoute} from './files/pdf-viewer/pdf-viewer.route';
import {FlashViewerRoute} from './files/flash-viewer/flash-viewer.route';
import {HtmlViewerRoute} from './files/html-viewer/html-viewer.route';
import {AddTestRoute} from '../admin/add-test/add-test.route';
import {AdminPanelRoute} from '../admin/panel/admin-panel.route';
import {AddContentRoute} from '../admin/add-content/add-content.route';

export const MainRoute: Routes = [
  {
    path: 'home',
    component: MainComponent,
    children: [
      ContentRoute,
      PdfViewerRoute,
      FlashViewerRoute,
      ...AdminPanelRoute,
      ...AddNodeRoute,
      HtmlViewerRoute,
      ContentRoute,
      AddContentRoute,
      AddTestRoute
    ]
  }
];
