import { ItemMovie } from './movie.model';
import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Movie } from '../movies/movie.model';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    moviesChanged = new Subject<ItemMovie>();
    
    constructor(private apiService: ApiService) { }

     sendTitle(message: ItemMovie) {
        this.moviesChanged.next(message)
     }
     getMessage(): Observable<any> {
        return this.moviesChanged.asObservable();
    }
    getMovie() {
        return this.apiService.get<Movie>().pipe(map(x => x.results));
    }
}