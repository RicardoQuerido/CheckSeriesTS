import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltvshowspageComponent } from './alltvshowspage.component';

describe('AlltvshowspageComponent', () => {
  let component: AlltvshowspageComponent;
  let fixture: ComponentFixture<AlltvshowspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltvshowspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltvshowspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
