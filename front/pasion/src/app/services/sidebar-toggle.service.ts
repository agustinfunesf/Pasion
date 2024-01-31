import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, fromEvent, takeUntil} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {

  public sidebarExpanded = true;

  //Show/Hide Sidebar

  isSidebarExpanded() {
    return this.sidebarExpanded;
  }

  setSideBarExpanded(isSidebarExpanded: boolean) {

    const sidebar = document.getElementById('sidebar');
    const dashboard = document.getElementById('content');

    this.sidebarExpanded = isSidebarExpanded;
    
    if (isSidebarExpanded) {
      sidebar?.classList.remove("hide");
      dashboard?.classList.remove("sidebar-hide");
    } else {
      sidebar?.classList.add("hide");
      dashboard?.classList.add("sidebar-hide");
    }
  }

  public screenWidth: any;
  public screenHeight: any;

  private _unsubscriber$: Subject<any> = new Subject();
  public screenWidth$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.init();
  }

  init() {
    this._setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(1000),
        takeUntil(this._unsubscriber$)
      ).subscribe((evt: any) => {
        this._setScreenWidth(evt.target.innerWidth);
      });
  }
  private _setScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }

  ngOnDestroy() {
    this._unsubscriber$.next(void 0);
    this._unsubscriber$.complete();
  }



}
