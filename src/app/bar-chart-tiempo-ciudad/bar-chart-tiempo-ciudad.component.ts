import { Component, OnInit } from '@angular/core';
declare var google: any;
import { Apollo } from 'apollo-angular';
import { GET_TIEMPO_VENTAS_LOCALIDAD } from '../graphql.operations';

@Component({
  selector: 'app-bar-chart-tiempo-ciudad',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart-tiempo-ciudad.component.html',
  styleUrl: './bar-chart-tiempo-ciudad.component.css'
})
export class BarChartTiempoCiudadComponent implements OnInit {
  datos: { localidad: string, promedioDiasEnVenta: number }[] = [];
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    // Cargar las bibliotecas de visualización de Google Charts
    google.charts.load('current', { packages: ['corechart', , 'bar'] });
    google.charts.setOnLoadCallback(() => this.drawChart());

    // Cargar datos desde la API Django
    this.apollo.watchQuery<any>({
      query: GET_TIEMPO_VENTAS_LOCALIDAD
    }).valueChanges.subscribe(({ data, error }) => {
      this.datos = data.calcularPromedioTiempoMercadoPorLocalidad;
      this.error = error;
      console.log(this.datos)

      // Llama a drawChart cuando los datos estén disponibles
    if (this.datos.length > 0 && google.visualization) {
      this.drawChart();
    }
    });
  }

  drawChart(): void {
    const container = document.getElementById('colChart');
    if (!container) {
      console.error('El contenedor no está definido.');
      return;
    }

    // Crear el array de datos para Google Charts
    const chartData: (string | number)[][] = [['Ciudad', 'Tiempo de Ventas Promedio']];
    this.datos.forEach(dato => {
      // Añadir ciudad (como string) y precio (como número)
      chartData.push([dato.localidad, dato.promedioDiasEnVenta]);
    });

    const data = google.visualization.arrayToDataTable(chartData);

    const options = {
      title: 'Tiempo de ventas promedio en cada ciudad',
      hAxis: { title: 'Ciudades' },
      vAxis: { title: 'Tiempo venta promedio', format: '#,##0.00' },
      bar: { groupWidth: '70%' },
      legend: { position: 'none' },
    };

    const chart = new google.visualization.ColumnChart(container);
    chart.draw(data, options);
  }
}
