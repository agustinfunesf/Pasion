import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  private sidebarExpanded = false;

  isSidebarExpanded() {
    return this.sidebarExpanded;
  }

  setSideBarExpanded(isSidebarExpanded: boolean) {

    const sidebar = document.getElementById('sidebar');
    const dashboard = document.getElementById('content');

    this.sidebarExpanded = isSidebarExpanded;
    
    if (isSidebarExpanded) {
      sidebar?.classList.add("hide");
      dashboard?.classList.add("sidebar-hide");
    } else {
      sidebar?.classList.remove("hide");
      dashboard?.classList.remove("sidebar-hide");
    }
  }
}
