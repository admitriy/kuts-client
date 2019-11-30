import {ItemNodeTest} from './item-node-test';
import {User} from '../auth/user';

export interface TestResult {
  id: string;
  testName: string;
  createDate: number;
  resultTest: Map<string, boolean>;
  test: ItemNodeTest;
  user: User;
}
