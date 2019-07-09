import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SeriesService} from '../series.service';

@Component({
  selector: 'app-tvshowpage',
  templateUrl: './tvshowpage.component.html',
  styleUrls: ['./tvshowpage.component.css']
})
export class TvshowpageComponent implements OnInit {

  show: object;
  seasons: Array<object[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private seriesService: SeriesService) {
    this.seasons = new Array<object[]>();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.seriesService.getTVShowInfo(id).subscribe(show => {
      // @ts-ignore
      this.show = show;

      console.log(this.show);

      // @ts-ignore
      for (let i = 0; i <= this.show.number_of_seasons; i++) {
        // @ts-ignore
        this.seriesService.getEpisodesBySeason(i, this.show.id).subscribe(info => {
          // @ts-ignore
          this.seasons.push(info);
          console.log(info);
        });
      }
    });


  }

}
