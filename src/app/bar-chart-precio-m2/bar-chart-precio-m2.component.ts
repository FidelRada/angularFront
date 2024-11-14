import { Component, OnInit } from '@angular/core';
declare var google: any;
import { Apollo } from 'apollo-angular';
import { GET_PROPIEDADES_LOCALIDAD_ZONA } from '../graphql.operations';

@Component({
  selector: 'app-bar-chart-precio-m2',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart-precio-m2.component.html',
  styleUrls: ['./bar-chart-precio-m2.component.css']
})
export class BarChartPrecioM2Component implements OnInit {
  datos: { localidad: string, precioPromedioPorM2: number }[] = [];
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    // Cargar las bibliotecas de visualización de Google Charts
    google.charts.load('current', { packages: ['corechart', , 'bar'] });
    google.charts.setOnLoadCallback(() => this.drawChart());

    // Cargar datos desde la API Django
    this.apollo.use('api2').watchQuery<any>({
      query: GET_PROPIEDADES_LOCALIDAD_ZONA
    }).valueChanges.subscribe(({ data, error }) => {
      this.datos = data.calcularPrecioPromedioPorLocalidad;
      this.error = error;
      console.log(this.datos)

      // Llama a drawChart cuando los datos estén disponibles
    if (this.datos.length > 0 && google.visualization) {
      this.drawChart();
    }
    });
  }

  drawChart(): void {
    const container = document.getElementById('barChart');
    if (!container) {
      console.error('El contenedor no está definido.');
      return;
    }

    // Crear el array de datos para Google Charts
    const chartData: (string | number)[][] = [['Ciudad', 'Precio por m²']];
    this.datos.forEach(dato => {
      // Añadir ciudad (como string) y precio (como número)
      chartData.push([dato.localidad, dato.precioPromedioPorM2]);
    });

    const data = google.visualization.arrayToDataTable(chartData);

    const options = {
      title: 'Precio promedio por m² en cada ciudad',
      hAxis: { title: 'Precio por m²', format: '#,##0.00' },
      vAxis: { title: 'Ciudades' },
      bar: { groupWidth: '70%' },
      legend: { position: 'none' },
    };

    const chart = new google.visualization.BarChart(container);
    chart.draw(data, options);
  }
}
