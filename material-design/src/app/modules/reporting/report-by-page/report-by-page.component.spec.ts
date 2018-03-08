import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByPageComponent } from './report-by-page.component';

describe('ReportByPageComponent', () => {
  let component: ReportByPageComponent;
  let fixture: ComponentFixture<ReportByPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
