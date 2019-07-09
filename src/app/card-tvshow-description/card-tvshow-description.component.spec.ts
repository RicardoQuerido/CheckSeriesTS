import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTVShowDescriptionComponent } from './card-tvshow-description.component';

describe('CardTVShowDescriptionComponent', () => {
  let component: CardTVShowDescriptionComponent;
  let fixture: ComponentFixture<CardTVShowDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTVShowDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTVShowDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
