import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertisment } from './advertisment';

describe('Advertisment', () => {
  let component: Advertisment;
  let fixture: ComponentFixture<Advertisment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Advertisment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advertisment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
