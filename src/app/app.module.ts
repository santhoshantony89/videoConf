import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FlipModule } from 'ngx-flip';

import { MatToolbarModule, MatCardModule, MatFormFieldModule,MatSidenavModule, MatInputModule, MatButtonModule, MatIconModule, MatMenuModule, MatListModule, MatExpansionModule } from '@angular/material';
import { JoinConfComponent } from './join-conf/join-conf.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},  
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JoinConfComponent,
    BroadcastComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlipModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
