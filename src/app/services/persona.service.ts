import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_PERSONA_BY_ID, GET_ALL_PERSONAS, UPDATE_PERSONA, DELTE_PERSONA, CREATE_PERSONA, GET_ALL_ROLES, CREATE_USUARIO } from '../graphql.operations'
import { Persona } from '../../models/persona';
import { UserInput } from '../../models/userInput';
import { PersonaInput } from '../../models/personaInput';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private apollo: Apollo) { }


  getPersonas() {
    return this.apollo.query({
      query: GET_ALL_PERSONAS
    });
  }

  getPersonaById(id: String) {
    return this.apollo.query({
      query: GET_PERSONA_BY_ID,
      variables: {
        id: id
      }
    });
  }
  editarPersona(id: string, persona: PersonaInput) {
    return this.apollo.mutate({
      mutation: UPDATE_PERSONA,
      variables: {
        id: id,
        input: persona
      }
    });
  }

  eliminarPersona(id: String) {
    console.log(id)
    return this.apollo.mutate({
      mutation: DELTE_PERSONA, // Define tu mutación de actualización en GraphQL
      variables: {
        id: id,
      }
    });
  }

  crearPersona(persona: Persona) {
    return this.apollo.mutate({
      mutation: CREATE_PERSONA,
      variables: {
        input: persona
      }
    });
  }

  listarRoles() {
    return this.apollo.query({
      query: GET_ALL_ROLES
    })
  }

  crearUsuario(personaId: String, password: String, roleId: String, username: String) {
    const usuario:UserInput = {
      password: password,
      personaId: personaId,
      rolId: roleId,
      username: username
    };
    return this.apollo.mutate({
      mutation: CREATE_USUARIO,
      variables: usuario
      /*
      variables: {
        password: password,
        personaId: personaId,
        roleIds: roleId,
        username: username
      }
        */
    })
  }

}
