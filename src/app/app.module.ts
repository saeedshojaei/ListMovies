import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { InformationMovieComponent } from './movies/information-movie/information-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MoveiStartComponent } from './movies/movei-start/movie-start.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    InformationMovieComponent,
    MoviesComponent,
    MoveiStartComponent,
    MovieItemComponent,
    ErrorPageComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
