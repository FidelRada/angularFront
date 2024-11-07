import { gql } from "apollo-angular";

const GET_PROPIEDADES_CIUDAD_ZONA = gql`
  query MyQuery {
    calcularPrecioPromedioPorCiudad {
      precioPromedioPorM2
      ciudad
    }
  }
`

const GET_TIEMPO_VENTAS_CIUDAD = gql`
  query MyQuery {
    calcularPromedioTiempoMercadoPorCiudad {
      ciudad
      promedioDiasEnVenta
    }
  }
`

const GET_TASA_CONVERSION_CIUDAD = gql`
  query MyQuery {
    calcularTasaConversionPorCiudad {
      tasaConversion
      ciudad
    }
  }
`

const GET_ZONAS = gql`
  query MyQuery {
    obtenerZonasUnicas {
      zone
    }
  }
`

const GET_VENDIDOS_POR_ZONA = gql`
  query MyQuery($zone: String!) {
    propiedadesVendidasPorZona(zone: $zone) {
      zona
      vendidos
      noVendidos
    }
  }
`

const GET_PRECIO_M2_POR_ZONA = gql`
  query MyQuery($zone: String!) {
  precioM2PorZona(zone: $zone) {
      zona
      precioPromedioPorM2
    }
  }
`

const GET_PROMEDIO_TIEMPO_POR_ZONA = gql`
  query MyQuery($zone: String!) {
  calcularPromedioTiempoMercadoPorZona(zone: $zone) {
      zona
      promedioDiasEnVenta
    }
  }
`

export { GET_PROPIEDADES_CIUDAD_ZONA, GET_TIEMPO_VENTAS_CIUDAD, GET_TASA_CONVERSION_CIUDAD, GET_ZONAS, GET_VENDIDOS_POR_ZONA, GET_PRECIO_M2_POR_ZONA, GET_PROMEDIO_TIEMPO_POR_ZONA };