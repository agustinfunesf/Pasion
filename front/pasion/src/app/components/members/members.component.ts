import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-members',
    standalone: true,
    templateUrl: './members.component.html',
    styleUrl: './members.component.css',
    imports: [TitleComponent, NavbarComponent, SidebarComponent]
})
export class MembersComponent {

}
