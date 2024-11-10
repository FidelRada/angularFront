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

export { GET_PROPIEDADES_LOCALIDAD_ZONA, GET_TIEMPO_VENTAS_LOCALIDAD, GET_TASA_CONVERSION_LOCALIDAD, GET_ZONAS, GET_VENDIDOS_POR_ZONA, GET_PRECIO_M2_POR_ZONA, GET_PROMEDIO_TIEMPO_POR_ZONA, GET_VENTAS, CREATE_PROPIEDAD, ADD_DATE_SOLD, ADD_VIEW };