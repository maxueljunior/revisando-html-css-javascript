import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>){
    objetos.forEach(o => o.paraTexto());
}