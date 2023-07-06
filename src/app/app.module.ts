import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ConnectComponent } from './connect/connect.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    HomeComponent,
    HireMeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'connect', component: ConnectComponent},
      {path: 'hire-me', component: HireMeComponent},
      {path: 'projects', component: ProjectsComponent},
      
      {path: '', redirectTo: '/home', pathMatch: 'full'}, // makes home the default page
    ]),

    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
