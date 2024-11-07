import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartPrecioM2Component } from './bar-chart-precio-m2.component';

describe('BarChartPrecioM2Component', () => {
  let component: BarChartPrecioM2Component;
  let fixture: ComponentFixture<BarChartPrecioM2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartPrecioM2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartPrecioM2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
