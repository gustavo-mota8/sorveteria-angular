import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabores } from './sabores';

describe('Sabores', () => {
  let component: Sabores;
  let fixture: ComponentFixture<Sabores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sabores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
