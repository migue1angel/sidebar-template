import { Component, HostListener } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  windowWidth: number;

  constructor(private sidebarService: SidebarService) {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  getBodyClass() {
    if (!this.sidebarService.collapsed && this.windowWidth > 768) {
      return 'body-trimmed';
    } else {
      return '';
    }
  }
}
