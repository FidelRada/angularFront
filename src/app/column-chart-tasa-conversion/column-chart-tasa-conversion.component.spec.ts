import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnChartTasaConversionComponent } from './column-chart-tasa-conversion.component';

describe('ColumnChartTasaConversionComponent', () => {
  let component: ColumnChartTasaConversionComponent;
  let fixture: ComponentFixture<ColumnChartTasaConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnChartTasaConversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnChartTasaConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
