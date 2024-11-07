import { Component, OnInit } from '@angular/core';
//import {HousingLocationComponent} from '../housing-location/housing-location.component';
//import { GraficoPreciosPorM2Component } from '../grafico-precios-por-m2/grafico-precios-por-m2.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { PropiedadesComponent } from '../propiedades/propiedades.component';
import { BarChartPrecioM2Component } from '../bar-chart-precio-m2/bar-chart-precio-m2.component';
import { BarChartTiempoCiudadComponent } from '../bar-chart-tiempo-ciudad/bar-chart-tiempo-ciudad.component';
import { ColumnChartTasaConversionComponent } from '../column-chart-tasa-conversion/column-chart-tasa-conversion.component';
import { InformacionZonasComponent } from '../informacion-zonas/informacion-zonas.component';
import { FormsModule } from '@angular/forms';



/*
const GET_DATOS_QUERY = gql`
  query {
    obtenerDatos {
      zona
      ciudad
      precio_promedio_por_m2
    }
  }
`;
*/

//<app-propiedades></app-propiedades>

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BarChartPrecioM2Component, BarChartTiempoCiudadComponent, ColumnChartTasaConversionComponent, InformacionZonasComponent],
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
}

/*
export class HomeComponent implements OnInit {
  arrayDeDatos: { zona: string, ciudad: string, precio_promedio_por_m2: number }[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: GET_DATOS_QUERY
    }).valueChanges.subscribe(({ data }) => {
      this.arrayDeDatos = data.obtenerDatos;
    });
  }
}
*/
