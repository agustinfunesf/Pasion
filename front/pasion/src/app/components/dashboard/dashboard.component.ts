import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarToggleService } from '../../services/sidebar-toggle.service';
import { HomeComponent } from "../home/home.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, SidebarComponent, NavbarComponent, HomeComponent]
})
export class DashboardComponent {

    //Sidebar toggle expand collapse content
    isSidebarExpanded: boolean;

    constructor(private SidebarToggleService: SidebarToggleService) {
      this.isSidebarExpanded = this.SidebarToggleService.isSidebarExpanded();
    }
  
}
