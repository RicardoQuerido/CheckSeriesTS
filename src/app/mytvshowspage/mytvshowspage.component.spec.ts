import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytvshowspageComponent } from './mytvshowspage.component';

describe('MytvshowspageComponent', () => {
  let component: MytvshowspageComponent;
  let fixture: ComponentFixture<MytvshowspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytvshowspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytvshowspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
