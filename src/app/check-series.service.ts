import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {TVShow} from './TVShow';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Episode} from './Episode';
import {Observable} from 'rxjs';
import {FollowingTVShow} from './FollowingTVShow';

@Injectable({
  providedIn: 'root'
})
export class CheckSeriesService {

  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  followTVShow(show: TVShow, username: string) {
    const url = this.baseUrl + 'ws/followtvshow';
    return this.http.post<any>(url, { show, username });
  }

  isTVShowFollowed(show: TVShow, username: string) {
    const params = new HttpParams()
      .set('show', String(show.id))
      .set('username', username);

    const url = this.baseUrl + 'ws/tvshow';
    return this.http.get(url, {params});
  }

  checkEpisode(episode: Episode, show: TVShow, username) {
    const url = this.baseUrl + 'ws/checkepisode';
    return this.http.post<any>(url, { episode, show, username });
  }

  getEpisodeStatus(episode: Episode, username) {
    const params = new HttpParams()
      .set('episode', String(episode.id))
      .set('username', username);

    const url = this.baseUrl + 'ws/episode';
    return this.http.get(url, {params});
  }

  getAllTVShows(username: string): Observable<FollowingTVShow[]> {
    const params = new HttpParams()
      .set('username', username);

    const url = this.baseUrl + 'ws/tvshows';
    return this.http.get<FollowingTVShow[]>(url, {params});
  }
}
