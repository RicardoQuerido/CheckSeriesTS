import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../series.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

declare function scrollTop(): any;

@Component({
  selector: 'app-alltvshowspage',
  templateUrl: './alltvshowspage.component.html',
  styleUrls: ['./alltvshowspage.component.css']
})
export class AlltvshowspageComponent implements OnInit {

  tvShows: object[];
  currentPage: number;
  lastPage: number;
  searchForm: FormGroup;
  private submitted = false;
  private loading = false;


  constructor(private seriesService: SeriesService,
              private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      showName: new FormControl('' )
    });
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      showName: ['', Validators.required]
    });
    this.currentPage = 1;
    this.lastPage = 9999;
    this.seriesService.getMostPopular(this.currentPage + '').subscribe(resp => {
      // @ts-ignore
      console.log(resp.results);
      // @ts-ignore
      this.tvShows = resp.results;
    });
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

  onSubmit() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }

    this.loading = true;
    this.seriesService.searchByName(1, this.searchForm.controls.showName.value).subscribe(resp => {
      // @ts-ignore
      console.log(resp);
      // @ts-ignore
      this.tvShows = resp.results;
    });

  }
}
