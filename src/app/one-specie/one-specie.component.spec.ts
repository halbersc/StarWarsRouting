import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSpecieComponent } from './one-specie.component';

describe('OneSpecieComponent', () => {
  let component: OneSpecieComponent;
  let fixture: ComponentFixture<OneSpecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSpecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
