import {Route, Routes} from '@angular/router';

import {AdminPanelComponent} from './admin-panel.component';

export const AdminPanelRoute: Routes = [
  {
    path: 'panel/node/:nodeId',
    component: AdminPanelComponent,
    data: {
      pageTitle: 'Просмотр panel'
    }
  }, {
    path: 'panel/node',
    component: AdminPanelComponent,
    data: {
      pageTitle: 'Просмотр panel'
    }
  }
];
