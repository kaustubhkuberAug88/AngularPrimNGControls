import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeViewComponent } from './tree-view/tree-view.component';
import { MenuComponent } from './menu/menu.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: 'tree', component: TreeViewComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
