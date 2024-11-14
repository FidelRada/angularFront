// persona.model.ts
export interface Role {
    id?: string; // UUID se maneja como string en TypeScript, y es opcional ya que puede generarse en el servidor
    name: string;
}