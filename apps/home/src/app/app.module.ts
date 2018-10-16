import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { AnonymousHomeComponent } from './home-content/anonymous-home/anonymous-home.component';
import { UserHomeComponent } from './home-content/user-home/user-home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { AnonymousMenuComponent } from './home-menu/anonymous-menu/anonymous-menu.component';
import { UserMenuComponent } from './home-menu/user-menu/user-menu.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { AnonymousFooterComponent } from './home-footer/anonymous-footer/anonymous-footer.component';
import { UserFooterComponent } from './home-footer/user-footer/user-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    AnonymousHomeComponent,
    UserHomeComponent,
    HomeMenuComponent,
    AnonymousMenuComponent,
    UserMenuComponent,
    HomeFooterComponent,
    AnonymousFooterComponent,
    UserFooterComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
