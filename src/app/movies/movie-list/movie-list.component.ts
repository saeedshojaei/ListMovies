import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemMovie } from './../movie.model';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  movies = new Array<ItemMovie>();
  filterMovies = new Array<ItemMovie>();
  searchName: string;
  constructor(private movieService: MoviesService) { }
  
  ngOnInit(): void {
     this.getMovies();
     this.subscription = this.movieService.getMessage().subscribe(data => {
      this.searchName = data;
      if(data) {
         this.filterMovies = Object.assign([], this.movies).filter(
         (item: ItemMovie) => item.title.toLowerCase().indexOf(data.toLowerCase()) > -1 );
      } else {
        this.assignCopy();
      }
     })
  } 
  getMovies() {
    this.movieService.getMovie().subscribe(movie => {
      this.movies = movie;
      this.filterMovies = this.movies;
     })
  }
  assignCopy(){
    this.filterMovies = Object.assign([], this.movies);
 }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
}
