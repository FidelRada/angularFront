import { Persona } from "./persona";
import { Role } from "./role";

// persona.model.ts
export interface User {
    id?: string; // UUID se maneja como string en TypeScript, y es opcional ya que puede generarse en el servidor
    username: String;
    password: String;

    persona: Persona;
    rol: Role;
}