import {GetNavigationBarItemsResponse} from '../get-navigation-bar-items-response';
import {ItemQuestion} from './item-question';

export interface ItemNodeTest {
    id: string;
    testName: string;
    questions?: ItemQuestion[];
    node: GetNavigationBarItemsResponse;
}
