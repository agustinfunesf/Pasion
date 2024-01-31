import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';


export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'Panel',
        children: [
          {
            path: 'home',
            component: HomeComponent,
            title: 'Inicio'
          },
          {
            path: 'members',
            component: MembersComponent,
            title: 'Socios'
          },
          {
            path: 'analytics',
            component: AnalyticsComponent,
            title: 'Economía'
          },
          {
            path: 'users',
            component: UsersComponent,
            title: 'Usuarios'
          },
        ],
      },
    
 ]; 


 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }