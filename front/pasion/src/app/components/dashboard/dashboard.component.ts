import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarToggleService } from '../../services/sidebar-toggle.service';
import { HomeComponent } from "../home/home.component";
import { TitleComponent } from "../title/title.component";
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, SidebarComponent, NavbarComponent, HomeComponent, TitleComponent, RouterOutlet, RouterLink]
})
export class DashboardComponent {


}
