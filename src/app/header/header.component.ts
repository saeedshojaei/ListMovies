import { MoviesService } from './../movies/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }
  filterItem(value: any) {
    this.movieService.sendTitle(value);
  }
}
