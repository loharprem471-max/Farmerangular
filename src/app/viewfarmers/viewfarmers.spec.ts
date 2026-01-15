import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfarmers } from './viewfarmers';

describe('Viewfarmers', () => {
  let component: Viewfarmers;
  let fixture: ComponentFixture<Viewfarmers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewfarmers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewfarmers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
