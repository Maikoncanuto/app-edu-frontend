import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { SidebarLeftComponent } from './dashboard/sidebar-left/sidebar-left.component';
import { SidebarMenuComponent } from './dashboard/sidebar-menu/sidebar-menu.component';
import { MainComponent } from './dashboard/main/main.component';
import { ContainerComponent } from './dashboard/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarLeftComponent,
    SidebarMenuComponent,
    MainComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
