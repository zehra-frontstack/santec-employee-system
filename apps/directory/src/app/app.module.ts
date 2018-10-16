import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeDirectoryComponent } from './home-directory/home-directory.component';
import { TopDirectoryComponent } from './top-directory/top-directory.component';
import { CarouselDirectoryComponent } from './carousel-directory/carousel-directory.component';
import { TopUserDirectoryComponent } from './top-user-directory/top-user-directory.component';
import { FilterDirectoryComponent } from './filter-directory/filter-directory.component';
import { ListDirectoryComponent } from './list-directory/list-directory.component';
import { SuggestFollowingComponent } from './suggest-following/suggest-following.component';
import { SearchDirectoryComponent } from './list-directory/search-directory/search-directory.component';
import { GeneralDirectoryComponent } from './list-directory/general-directory/general-directory.component';
import { SpecificDirectoryComponent } from './list-directory/specific-directory/specific-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDirectoryComponent,
    TopDirectoryComponent,
    CarouselDirectoryComponent,
    TopUserDirectoryComponent,
    FilterDirectoryComponent,
    ListDirectoryComponent,
    SuggestFollowingComponent,
    SearchDirectoryComponent,
    GeneralDirectoryComponent,
    SpecificDirectoryComponent
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
