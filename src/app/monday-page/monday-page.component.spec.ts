import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayPageComponent } from './monday-page.component';

describe('MondayPageComponent', () => {
  let component: MondayPageComponent;
  let fixture: ComponentFixture<MondayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
