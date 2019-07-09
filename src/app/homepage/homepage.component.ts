import {Component, OnInit} from '@angular/core';
import {SeriesService} from '../series.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  authenticated: boolean;
  mostPopular: object[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private seriesService: SeriesService) { }

  ngOnInit() {
    this.authenticated = false;
    this.seriesService.getMostPopular().subscribe(resp => {
      // @ts-ignore
      console.log(resp.results.slice(0, 3));
      // @ts-ignore
      this.mostPopular = resp.results.slice(0, 3);
    });
  }

}
