import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByRegionComponent } from './report-by-region.component';

describe('ReportByRegionComponent', () => {
  let component: ReportByRegionComponent;
  let fixture: ComponentFixture<ReportByRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
