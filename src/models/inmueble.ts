import { Persona } from "./persona";

// inmueble.model.ts
export interface Inmueble {
    id?: string; // UUID se maneja como string en TypeScript
    direccion: string;
    tipo?: string; // Ejemplo: 'Casa', 'Departamento', 'Terreno'
    superficie?: number; // En metros cuadrados
    valor?: number; // Valor estimado en moneda local
    descripcion?: string;
    //propietario_id?: string; // UUID que referencia a una Persona
    persona: Persona
}