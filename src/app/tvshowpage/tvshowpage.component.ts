import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SeriesService} from '../series.service';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';
import {delay} from 'rxjs/operators';
import {User} from '../User';
import {AuthenticationService} from '../authentication.service';
import {CheckSeriesService} from '../check-series.service';
import {Episode} from '../Episode';
import {TVShow} from '../TVShow';

@Component({
  selector: 'app-tvshowpage',
  templateUrl: './tvshowpage.component.html',
  styleUrls: ['./tvshowpage.component.css']
})
export class TvshowpageComponent implements OnInit {

  show: object;
  seasons: Array<object[]>;
  currentUser: User;
  following: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private seriesService: SeriesService,
              private authService: AuthenticationService,
              private checkSeriesService: CheckSeriesService) {
    this.seasons = new Array<object[]>();
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.seriesService.getTVShowInfo(id).subscribe(async show => {
      // @ts-ignore
      this.show = show;
      if (this.currentUser) {
        this.isFollowed();
      }

      // @ts-ignore
      for (let i = 0; i <= this.show.number_of_seasons; i++) {
        // @ts-ignore
        await this.seriesService.getEpisodesBySeason(i, this.show.id).subscribe(info => {

          if (this.currentUser) {
            // @ts-ignore
            for (const ep of info.episodes) {
              this.isChecked(ep);
            }
          }


          // @ts-ignore
          this.seasons.push(info);
        });
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });
      }
    });


  }

  checkEpisode(episode: object) {
    const ep = new Episode(episode);
    this.checkSeriesService.checkEpisode(ep, new TVShow(this.show), this.currentUser.username).subscribe(resp => {
      // @ts-ignore
      const offset = this.seasons[0].episodes[0].season_number === 0 ? 0 : 1;
      // @ts-ignore
      this.isChecked(this.seasons[ep.season_number - offset].episodes[ep.episode_number - 1]);
    });
  }

  isChecked(episode: object): boolean {
    this.checkSeriesService.getEpisodeStatus(new Episode(episode), this.currentUser.username).subscribe(resp => {
      // @ts-ignore
      return episode.checked = resp === 'checked';
    });
    return false;
  }

  followTVShow() {
    this.checkSeriesService.followTVShow(new TVShow(this.show), this.currentUser.username).subscribe(resp => {
      this.isFollowed();
    });
  }

  isFollowed() {
    this.checkSeriesService.isTVShowFollowed(new TVShow(this.show), this.currentUser.username).subscribe(resp => {
      this.following = resp === 'following';
    });
  }
}
