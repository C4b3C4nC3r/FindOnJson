/**
 * Import
 */
import Descompress from "./Descompress.js"
let fs = require('fs');



json1d = fs.readFileSync("./json-Example/1d.json","utf-8")//unidimencional
json2d = fs.readFileSync("./json-Example/2d.json","utf-8")//bidimencional
json3d = fs.readFileSync("./json-Example/3d.json","utf-8")//tridimencional
json4d = fs.readFileSync("./json-Example/4d.json","utf-8")//tetradimencional
json5d = fs.readFileSync("./json-Example/5d.json","utf-8")//quintadimencional

//console.log(json1d);

let des = new Descompress(JSON.parse(json2d),"z")

result = des.descompress()


//console.log(result);

console.log(
    result?
        result[0]["copy"]
            [result[0]["ubic"][0]]
            [result[0]["ubic"][1]]
        :"Undefined");

/*

*/
//res = typeof(result[0]["copy"][result[0]["ubic"][0]][result[0]["ubic"][1]])
//console.log(res);
//bucle(json2d)
//bucle(json3d)
//bucle(json4d)
//bucle(json5d)
//(key === find) ?"yes":"no"



