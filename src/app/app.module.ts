import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PdfViewerComponent } from './main/files/pdf-viewer/pdf-viewer.component';
import { FlashViewerComponent } from './main/files/flash-viewer/flash-viewer.component';
import { RouterModule } from '@angular/router';
import { PdfViewerRoute } from './main/files/pdf-viewer/pdf-viewer.route';
import { FlashViewerRoute } from './main/files/flash-viewer/flash-viewer.route';
import {AdminPanelRoute} from './admin/panel/admin-panel.route';
import {AdminPanelComponent} from './admin/panel/admin-panel.component';
import {AddNodeComponent} from './admin/add-node/add-node.component';
import {AddNodeRoute} from './admin/add-node/add-node.route';
import {HtmlViewerComponent} from './main/files/html-viewer/html-viewer.component';
import {HtmlViewerRoute} from './main/files/html-viewer/html-viewer.route';
import {ContentComponent} from './main/content/content.component';
import {ContentRoute} from './main/content/content.route';
import {AddContentComponent} from './admin/add-content/add-content.component';
import {AddContentRoute} from './admin/add-content/add-content.route';
import {AddTestComponent} from './admin/add-test/add-test.component';
import {AddTestRoute} from './admin/add-test/add-test.route';
import {HeaderMainComponent} from './header-main/header-main.component';
import {PassTestComponent} from './main/pass-test/pass-test.component';
import {PassTestRoute} from './main/pass-test/pass-test.route';
import {GroupListComponent} from './admin/group-list/group-list.component';
import {GroupListRoute} from './admin/group-list/group-list.route';
import {AddGroupComponent} from './admin/add-group/add-group.component';
import {AddGroupRoute} from './admin/add-group/add-group.route';
import {UserListComponent} from './admin/user-list/user-list.component';
import {UserListRoute} from './admin/user-list/user-list.route';
import {TestResultComponent} from './admin/test-result/test-result.component';
import {TestResultRoute} from './admin/test-result/test-result.route';
import {Mp4ViewerRoute} from './main/files/mp4-viewer/mp4-viewer.route';
import {Mp4ViewerComponent} from './main/files/mp4-viewer/mp4-viewer.component';
import {ZipViewerRoute} from './main/files/zip-viewer/zip-viewer.route';
import {ZipViewerComponent} from './main/files/zip-viewer/zip-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PdfViewerComponent,
    FlashViewerComponent,
    AdminPanelComponent,
    AddNodeComponent,
    HtmlViewerComponent,
    ContentComponent,
    AddContentComponent,
    AddTestComponent,
    HeaderMainComponent,
    PassTestComponent,
    GroupListComponent,
    AddGroupComponent,
    UserListComponent,
    TestResultComponent,
    Mp4ViewerComponent,
    ZipViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    PdfViewerModule,
    RouterModule.forRoot([
      PdfViewerRoute,
      FlashViewerRoute,
      ...AdminPanelRoute,
      ...AddNodeRoute,
      HtmlViewerRoute,
      ContentRoute,
      AddContentRoute,
      AddTestRoute,
      PassTestRoute,
      GroupListRoute,
      AddGroupRoute,
      UserListRoute,
      TestResultRoute,
      Mp4ViewerRoute,
      ZipViewerRoute]) //TODO
    // RouterModule.forRoot([
    //   ...MainRoute
    // ]),
    // MainModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
