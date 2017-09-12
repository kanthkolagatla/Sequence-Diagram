import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './../dashboard/dashboard.component';
import {TraceComponent} from './../trace/trace.component';
import {AnalyticsComponent} from './../analytics/analytics.component';
import {PreferencesComponent} from './../preferences/preferences.component';
import {LogoutComponent} from './../logout/logout.component';
import {DataService} from './../dashboard.service';



const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'trace',
    component: TraceComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'preference',
    component: PreferencesComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

/*@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }*/

export const routingComponents = RouterModule.forRoot(routes);
