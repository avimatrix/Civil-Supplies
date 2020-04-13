import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ManageIndentComponent } from './Dashboard/manage-indent/manage-indent.component';
import { CreateDispatchComponent } from './Dashboard/create-dispatch/create-dispatch.component';
import { CreateIndentComponent } from './Dashboard/create-indent/create-indent.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { ApproveIndentComponent } from './Dashboard/approve-indent/approve-indent.component';
import { DistrictWiseDemandComponent } from './Dashboard/district-wise-demand/district-wise-demand.component';

const routes: Routes = [
     {path: "", component: LoginComponent },
     {path: "Dashboard", component: LayoutComponent ,
     children:[
       {path:'Home',component:DashboardComponent},
      {path: "CreateIndent", component: CreateIndentComponent},
      {path: "CreateDemand", component: CreateDispatchComponent },
      {path: "ManageIndent", component: ManageIndentComponent },
      {path: "ApproveIndent", component: ApproveIndentComponent },
      {path: "DistrictWiseDemand", component: DistrictWiseDemandComponent },

     ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
