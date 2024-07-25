import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  items = [
    {
      label: 'File',
      icon: PrimeIcons.PLUS,
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus', items: [{ label: 'Project' }, { label: 'Other' }] },
        { label: 'Open' },
        { label: 'Quit' }
      ],
      isVisible: false 
    },
    {
      label: 'Edit',
      icon: PrimeIcons.CALENDAR,
      items: [
        { label: 'Undo', icon: 'pi pi-fw pi-undo' },
        { label: 'Redo', icon: PrimeIcons.AMAZON }
      ],
      isVisible: false
    },
    {
      label: 'Help',
      icon: PrimeIcons.USER,
      items: [
        {
          label: 'Contents'
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-search',
        }
      ],
      isVisible: false
    }
  ];

  toggleMenu(item: any) {
    this.items.forEach(i => {
      if (i !== item) {
        i.isVisible = false;
      }
    });
    item.isVisible = !item.isVisible;
  }
}
