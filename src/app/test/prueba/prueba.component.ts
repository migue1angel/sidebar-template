import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

export interface SidebarItem {
  label: string;
  routelink?:string;
  icon?: string;
  items?: SidebarItem[];
  expanded?: boolean;
}
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent {
  @Output() collapsed = new EventEmitter<boolean>();

  sideItems: SidebarItem[];
  constructor(protected sidebarService: SidebarService) {
    this.sideItems = this.sidebarService.sideItems;
  }
  screenWidth = 0;
  toggleCollapse() {
    this.sidebarService.collapsed = !this.sidebarService.collapsed;
  }
  toggleExpand(item: SidebarItem) {
    if (this.sidebarService.collapsed) {
      this.sidebarService.collapsed = !this.sidebarService.collapsed;
      item.expanded = !item.expanded;
      } else if (!this.sidebarService.collapsed) {
        item.expanded = !item.expanded;
    }
  }
}
