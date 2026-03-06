import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Junctiondetail } from './junctiondetail';

describe('Junctiondetail', () => {
  let component: Junctiondetail;
  let fixture: ComponentFixture<Junctiondetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Junctiondetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Junctiondetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
