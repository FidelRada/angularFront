import { Component, OnInit } from '@angular/core';
declare var google: any;
import { Apollo, gql } from 'apollo-angular';
import { GET_VENTAS } from '../graphql.operations';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  private monthlyData: any[] = [];
  private yearlyData: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => this.fetchData());
  }

  fetchData(): void {
    // Ejecuta la consulta directamente con Apollo
    this.apollo.use('api2')
      .watchQuery<any>({
        query: GET_VENTAS,
      })
      .valueChanges.subscribe((result) => {
        const data = result.data.salesSummary;
        this.processData(data);
      });
  }

  processData(data: any): void {
    // Procesa los datos para el gráfico mensual
    this.monthlyData = [['Fecha', 'Valor']];
    data.monthlyData.forEach((entry: any) => {
      this.monthlyData.push([new Date(entry.fecha), entry.valor]);
    });

    // Procesa los datos para el gráfico anual
    this.yearlyData = [['Fecha', 'Valor']];
    data.yearlyData.forEach((entry: any) => {
      this.yearlyData.push([new Date(entry.fecha), entry.valor]);
    });

    // Dibuja el gráfico inicial (por ejemplo, mensual)
    this.drawChart('monthly');
  }

  drawChart(viewType: string): void {
    const container = document.getElementById('lineChart');
    if (!container) return;

    // Selecciona los datos según la vista solicitada
    const chartData = viewType === 'monthly' ? this.monthlyData : this.yearlyData;

    const options = {
      title: `Ventas ${viewType === 'monthly' ? 'Mensuales' : 'Anuales'}`,
      hAxis: { title: 'Fecha' },
      vAxis: { title: 'Valor de Ventas' },
      legend: { position: 'bottom' },
    };

    // Crear el gráfico con los datos seleccionados
    const chart = new google.visualization.LineChart(container);
    const dataTable = google.visualization.arrayToDataTable(chartData);
    chart.draw(dataTable, options);
  }
}
