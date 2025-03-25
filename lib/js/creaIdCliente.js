import { exportaAHtml } from "./exportaAHtml.js"

/**
 * Añade caracteres al azar a una raíz, para obtener un clientId único.
 * @param {string} raiz 
 */
export function creaIdCliente(raiz = "") {
 const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 //Asegurar que comience con una letra
 let id = chars.charAt(Math.floor(Math.random()*52))
 for (var i = 0; i < 15; i++) {
  id += chars.charAt(Math.floor(Math.random() * chars.length))
 }
 //return raiz
 return id
}

exportaAHtml(creaIdCliente)