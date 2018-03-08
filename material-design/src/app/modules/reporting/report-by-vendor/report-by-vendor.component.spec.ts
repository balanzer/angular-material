import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByVendorComponent } from './report-by-vendor.component';

describe('ReportByVendorComponent', () => {
  let component: ReportByVendorComponent;
  let fixture: ComponentFixture<ReportByVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
