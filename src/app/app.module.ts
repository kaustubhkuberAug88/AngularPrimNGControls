import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {TreeModule} from 'primeng/tree';
import {TreeDragDropService} from 'primeng/api';
import { PanelModule } from 'primeng/panel'
import { MenuModule } from 'primeng/menu';

import { TreeViewComponent } from './tree-view/tree-view.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TreeModule,
    PanelModule,
    MenuModule,
    AppRoutingModule
            
  ],
  providers: [TreeDragDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
