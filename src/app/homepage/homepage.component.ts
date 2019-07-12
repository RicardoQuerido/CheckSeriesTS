import {Component, OnInit} from '@angular/core';
import {SeriesService} from '../series.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {User} from '../User';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  mostPopular: object[];
  currentUser: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private seriesService: SeriesService,
              private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  ngOnInit() {

    this.seriesService.getMostPopular('1').subscribe(resp => {
      // @ts-ignore
      console.log(resp.results.slice(0, 3));
      // @ts-ignore
      this.mostPopular = resp.results.slice(0, 3);
    });
  }

  logout() {
    this.authService.logout();
  }


}
