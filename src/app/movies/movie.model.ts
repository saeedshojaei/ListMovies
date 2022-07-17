export class Movie {
    page: number;
    results: ItemMovie[];
    total_pages: number;
    total_results: number

    constructor(page: number, results: ItemMovie[], total_pages: number, total_results: number ) {
        this.page = page;
        this.results = results;
        this.total_pages = total_pages;
        this.total_results = total_results;
    }
}

export class ItemMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: [];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

    constructor(adult: boolean, backdrop_path: string, genre_ids: [], id: number, original_language: string, 
                original_title: string, overview: string, popularity: number, poster_path: string,
                release_date: string,  title: string, video: boolean, vote_average: number, vote_count: number)
    { 
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.genre_ids = genre_ids;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}