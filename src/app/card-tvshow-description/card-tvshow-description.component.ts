import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {User} from '../User';
import {CheckSeriesService} from '../check-series.service';
import {TVShow} from '../TVShow';

declare function adaptFontSize(): any;

@Component({
  selector: 'app-card-tvshow-description',
  templateUrl: './card-tvshow-description.component.html',
  styleUrls: ['./card-tvshow-description.component.css']
})
export class CardTVShowDescriptionComponent implements OnInit {

  @Input() show: any;

  currentUser: User;
  following: boolean;

  constructor(private authService: AuthenticationService,
              private checkSeriesService: CheckSeriesService) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  ngOnInit() {
    adaptFontSize();
    if (this.currentUser) {
      this.isFollowed();
    }

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
