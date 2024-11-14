import { Component, OnInit } from '@angular/core';
declare var google: any;
import { Apollo } from 'apollo-angular';
import { GET_TASA_CONVERSION_LOCALIDAD } from '../graphql.operations';

@Component({
  selector: 'app-column-chart-tasa-conversion',
  standalone: true,
  imports: [],
  templateUrl: './column-chart-tasa-conversion.component.html',
  styleUrl: './column-chart-tasa-conversion.component.css'
})
export class ColumnChartTasaConversionComponent implements OnInit {
  datos: { localidad: string, tasaConversion: number }[] = [];
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    // Cargar las bibliotecas de visualización de Google Charts
    google.charts.load('current', { packages: ['corechart', , 'bar'] });
    google.charts.setOnLoadCallback(() => this.drawChart());

    // Cargar datos desde la API Django
    this.apollo.use('api2').watchQuery<any>({
      query: GET_TASA_CONVERSION_LOCALIDAD
    }).valueChanges.subscribe(({ data, error }) => {
      this.datos = data.calcularTasaConversionPorLocalidad;
      this.error = error;
      console.log(this.datos)

      // Llama a drawChart cuando los datos estén disponibles
    if (this.datos.length > 0 && google.visualization) {
      this.drawChart();
    }
    });
  }

  drawChart(): void {
    const container = document.getElementById('colChartTasaConversion');
    if (!container) {
      console.error('El contenedor no está definido.');
      return;
    }

    // Crear el array de datos para Google Charts
    const chartData: (string | number)[][] = [['Ciudad', 'Tasa de conversión']];
    this.datos.forEach(dato => {
      // Añadir ciudad (como string) y precio (como número)
      chartData.push([dato.localidad, dato.tasaConversion]);
    });

    const data = google.visualization.arrayToDataTable(chartData);

    const options = {
      title: 'Tasa de conversión en cada ciudad',
      hAxis: { title: 'Ciudades' },
      vAxis: { title: 'Tasa de conversión', format: '#,##0.00' },
      bar: { groupWidth: '70%' },
      legend: { position: 'none' },
    };

    const chart = new google.visualization.ColumnChart(container);
    chart.draw(data, options);
  }
}