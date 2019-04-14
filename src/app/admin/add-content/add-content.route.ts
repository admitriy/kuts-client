import {Route, Routes} from '@angular/router';
import {AddContentComponent} from './add-content.component';

export const AddContentRoute: Route = {
  path: 'panel/add-content/:nodeId',
  component: AddContentComponent,
  data: {
    pageTitle: 'Просмотр add content'
  }
}
