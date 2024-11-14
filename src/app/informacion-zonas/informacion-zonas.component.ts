import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { GET_ZONAS, GET_PRECIO_M2_POR_ZONA, GET_VENDIDOS_POR_ZONA, GET_PROMEDIO_TIEMPO_POR_ZONA } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-informacion-zonas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './informacion-zonas.component.html',
  styleUrl: './informacion-zonas.component.css'
})
export class InformacionZonasComponent implements OnInit {
  zonas: string[] = [];  // Lista de zonas únicas
  error: any;
  zonaSeleccionada: string = '';
  precioM2: any;
  promedioTiempoMercado: any;
  vendidosPorZona: any;

  chartData: (string | number | number)[][] = [];

  constructor(private apollo: Apollo, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Cargar datos desde la API Django
    this.apollo.use('api2').watchQuery<any>({
      query: GET_ZONAS
    }).valueChanges.subscribe(({ data, error }) => {
      if (error) {
        console.error('Error al cargar las zonas:', error);
        this.error = error;  // Si hay un error, lo guardamos
        return;
      }
      
      // Extraemos solo el campo 'zone' de cada objeto
      console.log(data.obtenerZonasUnicas);
      this.zonas = data.obtenerZonasUnicas.map((zona: { zona: string }) => zona.zona);
      console.log(this.zonas);  // Imprimimos las zonas en la consola para verificar
    })
  }

  onSelectZona() {
    if (this.zonaSeleccionada) {
      this.ejecutarConsultas(this.zonaSeleccionada);
      console.log(this.zonaSeleccionada)
    }
  }

  ejecutarConsultas(zona: string) {
    // Ejecutar la primera consulta: GET_PRECIO_M2_POR_ZONA
    this.apollo.use('api2')
      .watchQuery({
        query: GET_PRECIO_M2_POR_ZONA,
        variables: { zona },
      })
      .valueChanges.subscribe((result: any) => {
        if (result?.data?.precioM2PorZona && result.data.precioM2PorZona.length > 0) {
          this.precioM2 = result.data.precioM2PorZona[0];
          console.log('Precio por m2:', this.precioM2);
          
          // Forzamos la detección de cambios
          this.cdRef.detectChanges();
        } else {
          console.log('No se encontraron resultados');
        }
      });

    // Ejecutar la segunda consulta: GET_PROMEDIO_TIEMPO_POR_ZONA
    this.apollo.use('api2')
      .watchQuery({
        query: GET_PROMEDIO_TIEMPO_POR_ZONA,
        variables: { zona },
      })
      .valueChanges.subscribe((result: any) => {
        if (result?.data?.calcularPromedioTiempoMercadoPorZona && result.data.calcularPromedioTiempoMercadoPorZona.length > 0) {
          this.promedioTiempoMercado = result.data.calcularPromedioTiempoMercadoPorZona[0];
          console.log('Promedio tiempo mercado:', this.promedioTiempoMercado);
          
          // Forzamos la detección de cambios
          this.cdRef.detectChanges();
        } else {
          console.log('No se encontraron resultados');
        }
      });

      // Ejecutar la consulta de propiedades vendidas por zona
      this.apollo.use('api2')
      .watchQuery({
        query: GET_VENDIDOS_POR_ZONA,
        variables: { zona },
      })
      .valueChanges.subscribe((result: any) => {
      this.vendidosPorZona = result?.data?.propiedadesVendidasPorZona[0];
      console.log('Vendidos por zona', this.vendidosPorZona);

      // Preparar los datos para el gráfico
      this.chartData = [
        ['Estado', 'Cantidad'],
        ['Vendidos', this.vendidosPorZona?.vendidos],
        ['No Vendidos', this.vendidosPorZona?.noVendidos],
      ];
      console.log(this.chartData);

      // Llamar a la función para dibujar el gráfico después de preparar los datos
      this.dibujarGrafico();
    });
  }

  dibujarGrafico() {
    google.charts.load('current', {
      packages: ['corechart', 'charteditor']
    });
    google.charts.setOnLoadCallback(() => {
      const container = document.getElementById('piechart');
  
      // Verificar si el contenedor existe
      if (container) {
        const data = google.visualization.arrayToDataTable(this.chartData);
        const options = {
          title: 'Distribución de Propiedades por Estado',
          is3D: false,
          pieSliceText: 'percentage', // Muestra el porcentaje en cada segmento
          legend: { position: 'right' as 'right' },
        };
        const chart = new google.visualization.PieChart(container);
        chart.draw(data, options);
      } else {
        console.error('No se pudo encontrar el contenedor para el gráfico');
      }
    });
  }
}
