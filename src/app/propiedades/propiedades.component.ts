import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CommonModule } from '@angular/common';
import { GET_PROPIEDADES_CIUDAD_ZONA } from '../graphql.operations';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent implements OnInit {
  datos: { zona: string, ciudad: string, precioPromedioPorM2: number }[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: GET_PROPIEDADES_CIUDAD_ZONA
    }).valueChanges.subscribe(({ data, error }) => {
      this.datos = data.calcularPrecioPromedioPorZonaCiudad;
      this.error = error;
      console.log(this.datos);
    });
  }
}
