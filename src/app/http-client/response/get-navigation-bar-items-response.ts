import { NavigationBarItemContent } from './content/navigation-bar-item-content';

export interface GetNavigationBarItemsResponse {
    id: string;
    shortName: string;
    fullName: string;
    // header: string;
    // content: NavigationBarItemContent;
    parentNode: string | null;
    children?: GetNavigationBarItemsResponse[];
}
