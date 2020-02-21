import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeViewComponent } from './tree-view/tree-view.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'tree', component: TreeViewComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
