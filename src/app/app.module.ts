import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { TreeModule } from 'primeng/tree';
import { TreeDragDropService } from 'primeng/api';
import { PanelModule } from 'primeng/panel'
import { MenuModule } from 'primeng/menu';
import { EditorModule } from 'primeng/editor';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
// import { DropdownModule } from 'primeng/dropdown';
// import { MultiSelectModule } from 'primeng/multiselect';

import { TreeViewComponent } from './tree-view/tree-view.component';
import { MenuComponent } from './menu/menu.component';
import { EditorComponent } from './editor/editor.component';
import { DatatableComponent } from './datatable/datatable.component';
import { TablewithfilterComponent } from './tablewithfilter/tablewithfilter.component';



@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    MenuComponent,
    EditorComponent,
    DatatableComponent,
    TablewithfilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TreeModule,
    PanelModule,
    MenuModule,
    EditorModule,
    TableModule,
    InputTextModule,
    SliderModule
    // DropdownModule,
    // MultiSelectModule
  ],
  providers: [TreeDragDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
