import { Component } from '@angular/core';
import { SidebarToggleService } from '../../services/sidebar-toggle.service';
import { ThemeService } from '../../services/theme-toggle.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: []
})
export class NavbarComponent {
    
    isSidebarExpanded: boolean;
    isDarkMode: boolean;

    constructor(private SidebarToggleService: SidebarToggleService, 
                private themeService: ThemeService)
    {

      this.isSidebarExpanded = this.SidebarToggleService.isSidebarExpanded();
      this.isDarkMode = this.themeService.isDarkMode();

    }
  
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
      this.SidebarToggleService.setSideBarExpanded(this.isSidebarExpanded);
    }
  
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.themeService.setDarkMode(this.isDarkMode);
    }
}
