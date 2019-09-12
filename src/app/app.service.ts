import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie/movie.model';



@Injectable()
export class ApiService {
  public movieData: Movie[] = [];

  public BASE_URL = 'https://api.themoviedb.org/3/discover';

  constructor(private http: HttpClient) { }
  
  public getMovieGroups(): Observable<any> {
    return this.http.get(this.BASE_URL + '/movie?api_key=d0aea524bd07ed49cbc26dff63f357dd&with_genres=18&sort_by=popularity.desc');
  }
  public getTvGroups(): Observable<any> {
    return this.http.get(this.BASE_URL + '/tv?api_key=d0aea524bd07ed49cbc26dff63f357dd&with_genres=18&sort_by=popularity.desc');
  }  
}

