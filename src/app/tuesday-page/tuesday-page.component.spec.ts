import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuesdayPageComponent } from './tuesday-page.component';

describe('TuesdayPageComponent', () => {
  let component: TuesdayPageComponent;
  let fixture: ComponentFixture<TuesdayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuesdayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuesdayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
