import {GetNavigationBarItemsResponse} from '../get-navigation-bar-items-response';

export interface NavigationBarItemContent {
    id: string;
    header: string;
    contentType: string;
    content: string;
    executeFile: string;
    node: GetNavigationBarItemsResponse;
}
