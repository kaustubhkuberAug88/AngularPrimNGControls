import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Download', icon: 'pi pi-fw pi-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
        { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' }
      ]
    }];
  }

}
