// persona.model.ts
export interface PersonaInput {
    nombre: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    ci: string;
    wallet_address_ETH: string;
}