import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_INMUEBLES, GET_INMUEBLE_BY_ID, UPDATE_INMUEBLE, DELETE_INMUEBLE } from '../graphql.operations';
import { Inmueble } from '../../models/inmueble';

@Injectable({
  providedIn: 'root',
})
export class InmuebleService {
  constructor(private apollo: Apollo) {}

  getInmuebles() {
    return this.apollo.query({
      query: GET_ALL_INMUEBLES
    });
  }

  getInmuebleById(id: String) {
    return this.apollo.query({
      query: GET_INMUEBLE_BY_ID,
      variables: {
        id: id
      }
    });
  }

  editarInmueble(id: String){
    return this.apollo.query({
      query: DELETE_INMUEBLE,
      variables: {
        id: id
      }
    })
  }

  updateInmueble(inmueble: Inmueble) {
    return this.apollo.mutate({
      mutation: UPDATE_INMUEBLE, // Define tu mutación de actualización en GraphQL
      variables: {
        id: inmueble.id,
        direccion: inmueble.direccion,
        superficie: inmueble.superficie,
        tipo: inmueble.tipo,
        valor: inmueble.valor,
        persona: inmueble.persona
      }
    });
  }

  /*
  createPropiedad(propiedadData: any) {
    return this.apollo.mutate({
      mutation: CREATE_PROPIEDAD,
      variables: propiedadData
    });
  }
    */
}
