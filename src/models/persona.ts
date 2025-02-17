// persona.model.ts
export interface Persona {
    id?: string; // UUID se maneja como string en TypeScript, y es opcional ya que puede generarse en el servidor
    nombre: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    ci: string;
    wallet_address_ETH: string;
}