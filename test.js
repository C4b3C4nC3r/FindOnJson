import * as fs from 'node:fs';
import Descompress from "./modulos/Descompress.mjs";

console.log("Loading ... ");

console.log("Iniciado");

/**
 * 
 * Code
 * 
*/

let json1d = fs.readFileSync("./json-Example/1d.json","utf-8")//unidimencional
let json2d = fs.readFileSync("./json-Example/2d.json","utf-8")//unidimencional
let json3d = fs.readFileSync("./json-Example/3d.json","utf-8")//unidimencional
let json4d = fs.readFileSync("./json-Example/4d.json","utf-8")//unidimencional
let json5d = fs.readFileSync("./json-Example/5d.json","utf-8")//unidimencional


let des = new Descompress(JSON.parse(json1d),"a");

let result = des.desfract()



console.log("Resultado : ");


/**
 * 
 * 
 * REsultados
 * 
 */

console.log(result);


console.log("End Run");