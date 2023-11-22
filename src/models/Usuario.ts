import Postagens  from "./Postagens";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  postagens?: Postagens | null;
}