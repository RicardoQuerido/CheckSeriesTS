import {Component, Input, OnInit} from '@angular/core';

declare function adaptFontSize(): any;

@Component({
  selector: 'app-card-tvshow-description',
  templateUrl: './card-tvshow-description.component.html',
  styleUrls: ['./card-tvshow-description.component.css']
})
export class CardTVShowDescriptionComponent implements OnInit {

  @Input() show: object;

  constructor() { }

  ngOnInit() {
    adaptFontSize();
  }

}
