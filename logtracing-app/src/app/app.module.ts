import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as _ from "lodash";


import {DashboardService, DataService} from './dashboard.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {routingComponents} from './routing/routing-routing.module';
import { TraceComponent } from './trace/trace.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { LogoutComponent } from './logout/logout.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TraceComponent,
    AnalyticsComponent,
    PreferencesComponent,
    LogoutComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    routingComponents,
  ],
  providers: [DashboardService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
