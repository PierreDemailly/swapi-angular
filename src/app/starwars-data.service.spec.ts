import { TestBed } from '@angular/core/testing';

import { StarwarsDataService } from './starwars-data.service';

describe('StarwarsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsDataService = TestBed.get(StarwarsDataService);
    expect(service).toBeTruthy();
  });
});
