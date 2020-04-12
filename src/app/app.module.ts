import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { CreateIndentComponent } from './Dashboard/create-indent/create-indent.component';
import { ManageIndentComponent } from './Dashboard/manage-indent/manage-indent.component';
import { CreateDispatchComponent } from './Dashboard/create-dispatch/create-dispatch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { ApproveIndentComponent } from './Dashboard/approve-indent/approve-indent.component';
import { DistrictWiseDemandComponent } from './Dashboard/district-wise-demand/district-wise-demand.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {TooltipModule} from 'primeng/tooltip';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {MenuItem} from 'primeng/api';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, CreateIndentComponent, ManageIndentComponent, CreateDispatchComponent, HeaderComponent, SidebarComponent, FooterComponent, LayoutComponent, ApproveIndentComponent, DistrictWiseDemandComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,FormsModule,
    TableModule,HttpClientModule,DropdownModule,ButtonModule,TabViewModule,TooltipModule,MenuModule,CardModule,PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
