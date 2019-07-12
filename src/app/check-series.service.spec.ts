import { TestBed } from '@angular/core/testing';

import { CheckSeriesService } from './check-series.service';

describe('CheckSeriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckSeriesService = TestBed.get(CheckSeriesService);
    expect(service).toBeTruthy();
  });
});
