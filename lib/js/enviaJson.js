import { consumeJson } from "./consumeJson.js"
import { exportaAHtml } from "./exportaAHtml.js"

/**
 * @param { string } url
 * @param { Object } body
 * @param { "GET" | "POST"| "PUT" | "PATCH" | "DELETE" | "TRACE" | "OPTIONS"
 *  | "CONNECT" | "HEAD" } metodoHttp
 */
export async function enviaJson(url, body, metodoHttp = "POST") {
    //Imprimir JSON antes de enviarlo
    console.log("JSON enviado:", JSON.stringify(body, null, 2));
 return await consumeJson(fetch(url, {
  method: metodoHttp,
  headers: {
   "Content-Type": "application/json",
   "Accept": "application/json, application/problem+json"
  },
  body: JSON.stringify(body)
 }))
}

exportaAHtml(enviaJson)