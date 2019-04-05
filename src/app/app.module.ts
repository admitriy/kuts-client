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

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PdfViewerComponent,
    FlashViewerComponent,
    AdminPanelComponent,
    AddNodeComponent
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
    RouterModule.forRoot([PdfViewerRoute, FlashViewerRoute, AdminPanelRoute, AddNodeRoute]) //TODO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
