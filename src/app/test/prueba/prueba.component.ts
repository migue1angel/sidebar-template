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
  sidebarCollapsed : boolean = true;
  sideItems: SidebarItem[];
  constructor(protected sidebarService: SidebarService) {
    this.sideItems = this.sidebarService.sideItems;
  }
  screenWidth = 0;
  toggleCollapse() {
    this.sidebarCollapsed = !this.sidebarCollapsed
    this.collapsed.emit(this.sidebarCollapsed)
  }

  toggleExpand(item: SidebarItem) {
    if (this.sidebarCollapsed) {
      this.sidebarCollapsed = !this.sidebarCollapsed;
      item.expanded = !item.expanded;
      } else if (!this.sidebarCollapsed) {
        item.expanded = !item.expanded;
    }
  }
}
