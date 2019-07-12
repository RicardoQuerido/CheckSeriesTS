import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private API_KEY: string;
  private BASE_URL: string;

  constructor(private http: HttpClient) {
    this.API_KEY = '2bbd9e8844b9e73b0fb2e47e0f6d3b88';
    this.BASE_URL = 'https://api.themoviedb.org/';
  }

  getMostPopular(page: string): Observable<object> {
    return this.http.get(this.BASE_URL + '3/tv/popular?api_key=' + this.API_KEY + '&language=en-US&page=' + page);
  }

  getTVShowInfo(id: number): Observable<object> {
    return this.http.get(this.BASE_URL + '3/tv/' + id + 'popular?api_key=' + this.API_KEY + '&language=en-US&page=1');
  }

  getEpisodesBySeason(season: number, showId: number) {
    return this.http.get(this.BASE_URL + '3/tv/' + showId + '/season/' + season + '?api_key=' + this.API_KEY + '&language=en-US&page=1');
  }

  searchByName(season: number, showName: string) {
    return this.http.get(this.BASE_URL + '3/search/tv?api_key=' + this.API_KEY + '&language=en-US&page=1&query=' + showName);
  }
}
