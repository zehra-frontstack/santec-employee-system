import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeNewsComponent } from './home-news/home-news.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { TopUserNewsComponent } from './top-user-news/top-user-news.component';
import { NewsFilterComponent } from './news-filter/news-filter.component';
import { NewsListComponent } from './news-list/news-list.component';
import { AddNewComponent } from './add-new/add-new.component';
import { CheckNewComponent } from './check-new/check-new.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { SearchNewsComponent } from './news-list/search-news/search-news.component';
import { SpecificNewsComponent } from './news-list/specific-news/specific-news.component';
import { GeneralNewsComponent } from './news-list/general-news/general-news.component';
import { SimpleNewsCardComponent } from './news-card/simple-news-card/simple-news-card.component';
import { SimplifiedNewsCardComponent } from './news-card/simplified-news-card/simplified-news-card.component';
import { IconizedNewsCardComponent } from './news-card/iconized-news-card/iconized-news-card.component';
import { ComplexNewsCardComponent } from './news-card/complex-news-card/complex-news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNewsComponent,
    TopNewsComponent,
    TopUserNewsComponent,
    NewsFilterComponent,
    NewsListComponent,
    AddNewComponent,
    CheckNewComponent,
    NewsCardComponent,
    SearchNewsComponent,
    SpecificNewsComponent,
    GeneralNewsComponent,
    SimpleNewsCardComponent,
    SimplifiedNewsCardComponent,
    IconizedNewsCardComponent,
    ComplexNewsCardComponent
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
