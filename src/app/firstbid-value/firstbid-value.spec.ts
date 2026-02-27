import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstbidValue } from './firstbid-value';

describe('FirstbidValue', () => {
  let component: FirstbidValue;
  let fixture: ComponentFixture<FirstbidValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstbidValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstbidValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
