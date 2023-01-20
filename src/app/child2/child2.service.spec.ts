import { TestBed } from '@angular/core/testing';

import { Child2Service } from './child2.service';

describe('Child2Service', () => {
  let service: Child2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Child2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
