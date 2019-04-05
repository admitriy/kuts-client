import {Route} from '@angular/router';

import {AddNodeComponent} from './add-node.component';

export const AddNodeRoute: Route = {
  path: 'panel/add-node',
  component: AddNodeComponent,
  data: {
    pageTitle: 'Просмотр add node'
  }
};
