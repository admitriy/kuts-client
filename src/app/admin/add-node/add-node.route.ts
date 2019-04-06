import {Route, Routes} from '@angular/router';

import {AddNodeComponent} from './add-node.component';

export const AddNodeRoute: Routes = [{
  path: 'panel/add-node',
  component: AddNodeComponent,
  data: {
    pageTitle: 'Просмотр add node'
  }
}, {
  path: 'panel/add-node/:parentId',
  component: AddNodeComponent,
  data: {
    pageTitle: 'Просмотр add node'
  }
}];
