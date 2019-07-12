import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SeriesService} from '../series.service';
import {CheckSeriesService} from '../check-series.service';
import {AuthenticationService} from '../authentication.service';
import {User} from '../User';
import {FollowingTVShow} from '../FollowingTVShow';
import {TVShow} from '../TVShow';

declare function scrollTop(): any;

@Component({
  selector: 'app-mytvshowspage',
  templateUrl: './mytvshowspage.component.html',
  styleUrls: ['./mytvshowspage.component.css']
})
export class MytvshowspageComponent implements OnInit {

  tvShows: FollowingTVShow[];
  currentPage: number;
  lastPage: number;
  currentUser: User;



  constructor(private seriesService: SeriesService,
              private checkSeriesService: CheckSeriesService,
              private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  ngOnInit() {
    this.currentPage = 1;
    this.lastPage = 1;
    this.getFollowedShows();
  }

  newTVShows(toWhere: string) {
    this.currentPage +=  toWhere === 'up' ? 1 : -1;
    console.log(this.currentPage);
    this.seriesService.getMostPopular(this.currentPage + '').subscribe(resp => {
      // @ts-ignore
      console.log(resp.results);
      // @ts-ignore
      this.tvShows = resp.results;
    });
    scrollTop();
  }

  unfollowTVShow(show: TVShow) {
    this.checkSeriesService.followTVShow(new TVShow(show), this.currentUser.username).subscribe( resp => this.getFollowedShows());

  }

  getFollowedShows() {
    this.checkSeriesService.getAllTVShows(this.currentUser.username).subscribe(resp => {
      console.log(resp);
      this.tvShows = resp;
    });
  }

}
