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
import { PdfViewerComponent } from './files/pdf-viewer/pdf-viewer.component';
import { FlashViewerComponent } from './files/flash-viewer/flash-viewer.component';
import { RouterModule } from '@angular/router';
import { PdfViewerRoute } from './files/pdf-viewer/pdf-viewer.route';
import { FlashViewerRoute } from './files/flash-viewer/flash-viewer.route';
import {AdminPanelRoute} from './admin/panel/admin-panel.route';
import {AdminPanelComponent} from './admin/panel/admin-panel.component';
import {AddNodeComponent} from './admin/add-node/add-node.component';
import {AddNodeRoute} from './admin/add-node/add-node.route';
import {HtmlViewerComponent} from './files/html-viewer/html-viewer.component';
import {HtmlViewerRoute} from './files/html-viewer/html-viewer.route';
import {ContentComponent} from './content/content.component';
import {ContentRoute} from './content/content.route';
import {AddContentComponent} from './admin/add-content/add-content.component';
import {AddContentRoute} from './admin/add-content/add-content.route';
import {AddTestComponent} from './admin/add-test/add-test.component';
import {AddTestRoute} from './admin/add-test/add-test.route';
import {CookieService} from "ngx-cookie-service";

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
    AddTestComponent
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
      AddTestRoute]) //TODO
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
