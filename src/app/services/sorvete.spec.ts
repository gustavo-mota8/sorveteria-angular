import { TestBed } from '@angular/core/testing';

import { Sorvete } from './sorvete';

describe('Sorvete', () => {
  let service: Sorvete;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sorvete);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
