import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; //import for search
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GithubService } from './services/github.service';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { GithubRepoSearchComponent } from './github-repo-search/github-repo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    GithubRepoSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
