import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WednesdayPageComponent } from './wednesday-page.component';

describe('WednesdayPageComponent', () => {
  let component: WednesdayPageComponent;
  let fixture: ComponentFixture<WednesdayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WednesdayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WednesdayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
