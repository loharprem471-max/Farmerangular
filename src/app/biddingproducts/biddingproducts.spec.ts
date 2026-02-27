import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biddingproducts } from './biddingproducts';

describe('Biddingproducts', () => {
  let component: Biddingproducts;
  let fixture: ComponentFixture<Biddingproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Biddingproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biddingproducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
