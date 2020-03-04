///<reference path="../../../node_modules/ng2-pdf-viewer/src/app/pdf-viewer/pdf-viewer.module.d.ts"/>
///<reference path="../../../node_modules/@angular/common/http/src/module.d.ts"/>
import {NgModule} from '@angular/core';
import {PdfViewerComponent} from './files/pdf-viewer/pdf-viewer.component';
import {AddNodeComponent} from '../admin/add-node/add-node.component';
import {AddTestComponent} from '../admin/add-test/add-test.component';
import {FlashViewerComponent} from './files/flash-viewer/flash-viewer.component';
import {AddContentComponent} from '../admin/add-content/add-content.component';
import {ContentComponent} from './content/content.component';
import {NavigationBarComponent} from '../navigation-bar/navigation-bar.component';
import {AdminPanelComponent} from '../admin/panel/admin-panel.component';
import {HtmlViewerComponent} from './files/html-viewer/html-viewer.component';
import {HeaderMainComponent} from '../header-main/header-main.component';
import {AppComponent} from '../app.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {DemoMaterialModule} from '../../material-module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {MainRoute} from './main.route';
import {AddTestRoute} from '../admin/add-test/add-test.route';
import {AddContentRoute} from '../admin/add-content/add-content.route';
import {ContentRoute} from './content/content.route';
import {HtmlViewerRoute} from './files/html-viewer/html-viewer.route';
import {AddNodeRoute} from '../admin/add-node/add-node.route';
import {AdminPanelRoute} from '../admin/panel/admin-panel.route';
import {FlashViewerRoute} from './files/flash-viewer/flash-viewer.route';
import {PdfViewerRoute} from './files/pdf-viewer/pdf-viewer.route';
import {GroupListComponent} from '../admin/group-list/group-list.component';
import {GroupListRoute} from '../admin/group-list/group-list.route';
import {AddGroupComponent} from '../admin/add-group/add-group.component';
import {AddGroupRoute} from '../admin/add-group/add-group.route';
import {UserListComponent} from '../admin/user-list/user-list.component';
import {UserListRoute} from '../admin/user-list/user-list.route';
import {TestResultComponent} from '../admin/test-result/test-result.component';
import {TestResultRoute} from '../admin/test-result/test-result.route';
import {Mp4ViewerRoute} from './files/mp4-viewer/mp4-viewer.route';
import {Mp4ViewerComponent} from './files/mp4-viewer/mp4-viewer.component';

@NgModule({
  imports: [
    // BrowserModule,
    // HttpClientModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    // FormsModule,
    // HttpClientModule,
    // DemoMaterialModule,
    // MatNativeDateModule,
    // ReactiveFormsModule,
    // PdfViewerModule,
    // RouterModule.forRoot([
    //   PdfViewerRoute,
    //   FlashViewerRoute,
    //   ...AdminPanelRoute,
    //   ...AddNodeRoute,
    //   HtmlViewerRoute,
    //   ContentRoute,
    //   AddContentRoute,
    //   AddTestRoute,
    //   GroupListRoute,
    //   AddGroupRoute,
    //   UserListRoute,
    //   TestResultRoute,
    //   Mp4ViewerRoute
    // ])
  ],
  declarations: [
    // AppComponent,
    // NavigationBarComponent,
    // PdfViewerComponent,
    // FlashViewerComponent,
    // AdminPanelComponent,
    // AddNodeComponent,
    // HtmlViewerComponent,
    // ContentComponent,
    // AddContentComponent,
    // AddTestComponent,
    // HeaderMainComponent,
    MainComponent,
    // GroupListComponent,
    // AddGroupComponent,
    // UserListComponent,
    // TestResultComponent,
    // Mp4ViewerComponent
  ],
  providers: [],
  exports: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
