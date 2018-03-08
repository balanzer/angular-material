import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByBrandComponent } from './report-by-brand.component';

describe('ReportByBrandComponent', () => {
  let component: ReportByBrandComponent;
  let fixture: ComponentFixture<ReportByBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
