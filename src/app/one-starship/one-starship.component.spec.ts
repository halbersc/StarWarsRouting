import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStarshipComponent } from './one-starship.component';

describe('OneStarshipComponent', () => {
  let component: OneStarshipComponent;
  let fixture: ComponentFixture<OneStarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneStarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
