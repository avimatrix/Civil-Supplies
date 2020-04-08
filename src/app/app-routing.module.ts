import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ArrivalsComponent } from './Dashboard/arrivals/arrivals.component';
import { ManageIndentComponent } from './Dashboard/manage-indent/manage-indent.component';
import { CreateDispatchComponent } from './Dashboard/create-dispatch/create-dispatch.component';
import { CreateIndentComponent } from './Dashboard/create-indent/create-indent.component';
import { LayoutComponent } from './dashboard/layout/layout.component';

const routes: Routes = [
     {path: "", component: LoginComponent },
     {path: "Dashboard", component: LayoutComponent ,
     children:[
       {path:'',component:DashboardComponent},
      {path: "CreateIndent", component: CreateIndentComponent},
      {path: "CreateDispatch", component: CreateDispatchComponent },
      {path: "ManageIndent", component: ManageIndentComponent },
      {path: "Arrivals", component: ArrivalsComponent },
     ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
