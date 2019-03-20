import { NgModule } from '@angular/core';
import { Routes, RouterModule ,ROUTER_CONFIGURATION} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HeaderComponent } from './home/header/header.component';
import { ContentComponent } from './home/content/content.component';
import { DashboardComponent } from './home/sidebar/home/dashboard/dashboard.component';
import { SearchPageComponent } from './home/sidebar/search-page/search-page.component';
import { SettingComponent } from './home/sidebar/setting/setting.component';


const routes: Routes = [
  {path:'login', component:LoginComponent,},
  {path:'', component:LoginComponent},
  {
    path:'home',
    component:HomeComponent,
   

    children:[
      {path:'sidebar',component:SidebarComponent
       },
      {path:'content',component:ContentComponent
      ,children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'searchpage',component:SearchPageComponent},
        {path:'manageuser',component:SettingComponent},
        
      ]},
      {path:'header',component:HeaderComponent},
      {path:'content',component:ContentComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes),NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
