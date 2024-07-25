import { Component, HostListener } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  windowWidth: number;
  collapsed: boolean = true;
  constructor() {
    this.windowWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  getCollapsed(event:boolean){
    this.collapsed = event;
  }

  getBodyClass() {
    if (!this.collapsed && this.windowWidth > 768) {
      return 'body-trimmed';
    } else {
      return '';
    }
  }
}
