import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ItemMovie } from './../movie.model';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-information-movie',
  templateUrl: './information-movie.component.html',
  styleUrls: ['./information-movie.component.scss']
})
export class InformationMovieComponent implements OnInit {
  movie: ItemMovie;
  id: number;
  currentRate: number;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.moviesService.getMovie().subscribe((movie:ItemMovie[]) => {
        (this.movie = movie.find(x => x.id === this.id) as ItemMovie) ;
        this.currentRate = this.movie.vote_average / 2;
       })
    })

  }

}
