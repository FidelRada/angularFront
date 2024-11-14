
export interface UserInput {
    id?: string; // UUID se maneja como string en TypeScript, y es opcional ya que puede generarse en el servidor
    username: String;
    password: String;

    personaId: String;
    rolId: String;
}