// transaccion.model.ts
export interface Transaccion {
    id?: string; // UUID
    tipo: string; // 'Compra', 'Venta', 'Herencia'
    fecha: Date; // Se maneja como tipo Date en TypeScript
    monto: number;
    comprador_id?: string; // UUID que referencia a un usuario
    vendedor_id?: string; // UUID que referencia a un usuario
    inmueble_id?: string; // UUID que referencia a un Inmueble
    detalles?: string;
}