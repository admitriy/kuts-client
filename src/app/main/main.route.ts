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
import {GroupListRoute} from '../admin/group-list/group-list.route';
import {AddGroupRoute} from '../admin/add-group/add-group.route';
import {UserListRoute} from '../admin/user-list/user-list.route';
import {TestResultRoute} from '../admin/test-result/test-result.route';
import {Mp4ViewerRoute} from './files/mp4-viewer/mp4-viewer.route';

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
      AddTestRoute,
      GroupListRoute,
      AddGroupRoute,
      UserListRoute,
      TestResultRoute,
      Mp4ViewerRoute
    ]
  }
];
