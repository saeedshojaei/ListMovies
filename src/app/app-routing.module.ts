import { MoveiStartComponent } from './movies/movei-start/movie-start.component';
import { InformationMovieComponent } from './movies/information-movie/information-movie.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent, children: [
    { path: '', component: MoveiStartComponent },
    { path: ':id', component: InformationMovieComponent },
  ] },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {  path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
