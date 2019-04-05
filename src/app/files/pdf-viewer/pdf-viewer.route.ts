import {Route, Routes} from '@angular/router';

import {PdfViewerComponent} from './pdf-viewer.component';

export const PdfViewerRoute: Route = {
    path: 'pdf-viewer/:nodeId',
    component: PdfViewerComponent,
    data: {
        pageTitle: 'Просмотр pdf файла'
    }
};
