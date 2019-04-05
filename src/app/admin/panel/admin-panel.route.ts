import {Route} from '@angular/router';

import {AdminPanelComponent} from './admin-panel.component';

export const AdminPanelRoute: Route = {
  path: 'panel',
  component: AdminPanelComponent,
  data: {
    pageTitle: 'Просмотр panel'
  }
};
