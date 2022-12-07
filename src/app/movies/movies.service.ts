import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  apiKey = "e701b104";

  parameters = new HttpParams({
    fromObject: {
      action: "opensearch",
      format: "json",
      origin: "*"
    }
  });

  baseUrlTitle = 'http://www.omdbapi.com/?s='
  baseUrlId = 'http://www.omdbapi.com/?i='

  constructor(private httpClient: HttpClient) { }

  getMovies(title: string, page: number, showType: string) {
    let showTypeFilter = ''
    if (!(showType === 'all')) {
      showTypeFilter = '&type=' + showType;
    }
    return this.httpClient.get(this.baseUrlTitle + title + '&apikey=' + this.apiKey + '&page=' + page + showTypeFilter,
      { params: this.parameters.set('search', title) });
  }

  getMovieDetails(imdbId: any){
    return this.httpClient.get(this.baseUrlId + imdbId + '&apikey=' + this.apiKey,
      { params: this.parameters.set('search', imdbId) });
  }
}
