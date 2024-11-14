import { gql } from "apollo-angular";

const GET_PROPIEDADES_LOCALIDAD_ZONA = gql`
  query MyQuery {
    calcularPrecioPromedioPorLocalidad {
    localidad
    precioPromedioPorM2
  }
  }
`

const GET_TIEMPO_VENTAS_LOCALIDAD = gql`
  query MyQuery {
    calcularPromedioTiempoMercadoPorLocalidad {
      localidad
      promedioDiasEnVenta
    }
  }
`

const GET_TASA_CONVERSION_LOCALIDAD = gql`
  query MyQuery {
    calcularTasaConversionPorLocalidad {
      localidad
      tasaConversion
    }
  }
`

const GET_ZONAS = gql`
  query MyQuery {
    obtenerZonasUnicas {
      zona
    }
  }
`

const GET_VENDIDOS_POR_ZONA = gql`
  query MyQuery($zona: String!) {
    propiedadesVendidasPorZona(zona: $zona) {
      zona
      vendidos
      noVendidos
    }
  }
`

const GET_PRECIO_M2_POR_ZONA = gql`
  query MyQuery($zona: String!) {
  precioM2PorZona(zona: $zona) {
      zona
      precioPromedioPorM2
    }
  }
`

const GET_PROMEDIO_TIEMPO_POR_ZONA = gql`
  query MyQuery($zona: String!) {
  calcularPromedioTiempoMercadoPorZona(zona: $zona) {
      zona
      promedioDiasEnVenta
    }
  }
`

const GET_VENTAS = gql`
  query GetSalesSummary {
    salesSummary {
      monthlyData {
        fecha
        valor
      }
      yearlyData {
        fecha
        valor
      }
    }
  }
`

const CREATE_PROPIEDAD = gql`
  mutation CreatePropiedad(
    $createdAt: String,
    $localidad: String!,
    $metrosCuadradosConstruidos: Float!,
    $superficie: String!,
    $tipo: String!,
    $valor: Float!,
    $zona: String!
  ) {
    createPropiedad(
      createdAt: $createdAt
      localidad: $localidad
      metrosCuadradosConstruidos: $metrosCuadradosConstruidos
      superficie: $superficie
      tipo: $tipo
      valor: $valor
      zona: $zona
    ) {
      propiedad {
        createdAt
        localidad
        metrosCuadradosConstruidos
        superficie
        tipo
        valor
        zona
      }
    }
  }
`;

const ADD_DATE_SOLD = gql`
  mutation UpdateDateSold($id: ID!, $fechaDeVenta: String!) {
    updateDateSold(id: $id, fechaDeVenta: $fechaDeVenta) {
      propiedad {
        id
        fechaDeVenta
      }
    }
  }
`

const ADD_VIEW = gql`
  mutation IncrementVisitas($id: ID!) {
    incrementVisitas(id: $id) {
      propiedad {
        id
        visitas
      }
    }
  }
`

//LAS PETICIONES GRAPHQL DEL RPE

const GET_ALL_INMUEBLES = gql`
  query MyQuery {
  getAllInmuebles {
    id
    direccion
    descripcion
    superficie
    tipo
    valor
    persona {
      id
      nombre
      apellidoPaterno
      apellidoMaterno
      ci
    }
  }
}
`

const GET_INMUEBLE_BY_ID = gql`
query MyQuery {
  getInmuebleById(id: $id){
    id
    descripcion
    direccion
    superficie
    tipo
    valor
    persona {
      id
      ci
      nombre
      apellidoPaterno
      apellidoMaterno
    }
  }
}
`

const DELETE_INMUEBLE = gql`
  mutation MyMutation {
    deleteInmueble(id: $id)
  }
`

const UPDATE_INMUEBLE = gql`
  mutation MyMutation {
    updateInmueble(
      id: $id
      input: $Inmueble
    ) {
      descripcion
      direccion
      id
      persona {
        apellidoMaterno
        apellidoPaterno
        ci
        id
        nombre
      }
      superficie
      tipo
      valor
    }
  }
`

const GET_ALL_PERSONAS = gql`
  query MyQuery {
  getAllPersonas {
    apellidoMaterno
    apellidoPaterno
    ci
    nombre
    id
    wallet_address_ETH
  }
}
`

const GET_PERSONA_BY_ID = gql`
 query MyQuery {
  getPersonaById(id: $id) {
    ci
    id
    nombre
    apellidoMaterno
    apellidoPaterno
    wallet_address_ETH
  }
}
`
const CREATE_PERSONA = gql`
  mutation MyMutation($input: PersonaInput!) {
    addPersona(
      input: $input
    ) {
      id
      ci
      nombre
      apellidoPaterno
      apellidoMaterno
      wallet_address_ETH
    }
  }
`;

const UPDATE_PERSONA = gql`
  mutation UpdatePersona($id: ID!, $input: PersonaInput!) {
    updatePersona(id: $id, input: $input) {
      id
      nombre
      apellidoPaterno
      apellidoMaterno
      ci
      wallet_address_ETH
    }
  }
`;

const DELTE_PERSONA = gql`
mutation MyMutation($id: ID!) {
  deletePersona(id: $id)
}
`;

const GET_ALL_ROLES = gql`
query MyQuery {
  getAllRole {
    id
    name
  }
}
`

const CREATE_USUARIO = gql`
mutation MyMutation {
  createUser(input: {
    password: $password, 
    personaId: $personaId, 
    roleIds: $roleId, 
    username: $username
    }) {
    id
    password
    persona {
      nombre
      id
      ci
      apellidoPaterno
      apellidoMaterno
    }
    roles {
      name
      id
    }
  }
}
`

export { GET_PROPIEDADES_LOCALIDAD_ZONA, GET_TIEMPO_VENTAS_LOCALIDAD, GET_TASA_CONVERSION_LOCALIDAD, GET_ZONAS, GET_VENDIDOS_POR_ZONA, GET_PRECIO_M2_POR_ZONA, GET_PROMEDIO_TIEMPO_POR_ZONA, GET_VENTAS, CREATE_PROPIEDAD, ADD_DATE_SOLD, ADD_VIEW,

  GET_ALL_INMUEBLES, GET_INMUEBLE_BY_ID, DELETE_INMUEBLE, UPDATE_INMUEBLE,

  GET_ALL_PERSONAS, GET_PERSONA_BY_ID, UPDATE_PERSONA, DELTE_PERSONA, CREATE_PERSONA, GET_ALL_ROLES,

  CREATE_USUARIO
 };