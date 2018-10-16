import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileTabsComponent } from './profile-tabs/profile-tabs.component';
import { MentorComponent } from './mentor/mentor.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './personal/edit/edit.component';
import { CurrentActivityComponent } from './dashboard/current-activity/current-activity.component';
import { MentoringComponent } from './mentor/mentoring/mentoring.component';
import { MentoredComponent } from './mentor/mentored/mentored.component';
import { ExplodedLoginComponent } from './login/exploded-login/exploded-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    DashboardComponent,
    ProfileTabsComponent,
    MentorComponent,
    LoginComponent,
    EditComponent,
    CurrentActivityComponent,
    MentoringComponent,
    MentoredComponent,
    ExplodedLoginComponent
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
