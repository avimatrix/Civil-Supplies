import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { CreateIndentComponent } from './Dashboard/create-indent/create-indent.component';
import { ManageIndentComponent } from './Dashboard/manage-indent/manage-indent.component';
import { CreateDispatchComponent } from './Dashboard/create-dispatch/create-dispatch.component';
import { ArrivalsComponent } from './Dashboard/arrivals/arrivals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, CreateIndentComponent, ManageIndentComponent, CreateDispatchComponent, ArrivalsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
