import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartTiempoCiudadComponent } from './bar-chart-tiempo-ciudad.component';

describe('BarChartTiempoCiudadComponent', () => {
  let component: BarChartTiempoCiudadComponent;
  let fixture: ComponentFixture<BarChartTiempoCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartTiempoCiudadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartTiempoCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
