import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { SearchPageComponent } from './home/sidebar/search-page/search-page.component';
import { ChartistModule } from 'ng-chartist';
import { DashboardComponent } from './home/sidebar/home/dashboard/dashboard.component';
import { ContentComponent } from './home/content/content.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {FormControl} from "@angular/forms";
import { SettingComponent } from './home/sidebar/setting/setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddnewuserComponent } from './home/sidebar/setting/addnewuser/addnewuser.component';
import { NewvisitorComponent } from './home/header/newvisitor/newvisitor.component';
import { MatAutocompleteModule, MatInputModule, MatMenuModule,MatFormFieldModule,MatRadioModule,MatButtonModule,MatToolbarModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HandleButtonDirective } from './Directives/handle-button.directive';
import { AuthGuard } from 'Nokia_Receptionist/src/app/ApiCall/authguard.service';
import { AuthService } from './ApiCall/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    SearchPageComponent,
    DashboardComponent,
    ContentComponent,
    SettingComponent,
    AddnewuserComponent,
    NewvisitorComponent,
    HandleButtonDirective,
    

  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    ChartistModule,
    FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,MatRadioModule,MatButtonModule,MatToolbarModule,
    MatIconModule,
    MatMenuModule

  ],
  providers:[AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
