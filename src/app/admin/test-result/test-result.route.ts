import {Route} from '@angular/router';
import {AddTestComponent} from '../add-test/add-test.component';
import {TestResultComponent} from './test-result.component';

export const TestResultRoute: Route = {
  path: 'panel/test-result/:userId',
  component: TestResultComponent,
  data: {
    pageTitle: 'Просмотр результатов'
  }
}
