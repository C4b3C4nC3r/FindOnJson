/**
 * Import
 */


let fs = require('fs');



/**
 * 
 * Vars:
 * find ->  busqueda, alone string
 * dimension -> cual es la dimension del file.json int
 * result -> [
 *  {
 *      "ubicacion":[int, string],
 *       "valor":[51515]
 *        "copia":{copia del json}
 * }
 * ]
 * 
 */
/**
 * 
    let data = null
    let dim = 0;
    let result = [{
        "ubic":[0,null],
        "value":[null],
        "copy": data
    }]
 */

/**
 * 
 * LOAD: JSONS
 * 
 */

json1d = fs.readFileSync("./json-Example/1d.json","utf-8")//unidimencional
json2d = fs.readFileSync("./json-Example/2d.json","utf-8")//bidimencional
json3d = fs.readFileSync("./json-Example/3d.json","utf-8")//tridimencional
json4d = fs.readFileSync("./json-Example/4d.json","utf-8")//tetradimencional
json5d = fs.readFileSync("./json-Example/5d.json","utf-8")//quintadimencional

//console.log(json1d);

function firstd(json,find) {
    //console.log(typeof(json));
    
    let data = json;
    result = [{
        "ubic":[0,null],
        "value":[null],
        "copy": data
    }]
    for (const index in json) {
        if (Object.hasOwnProperty.call(json, index)) {
            const element = json[index];
            for (const key in element) {
                if (Object.hasOwnProperty.call(element, key)) {
                    const valor = element[key];
                    result[0]["value"] = valor;
                    result[0]["ubic"] = [index,key]                                        
                    if(key == find){
                        return result;
                    }   
                }
            }             
        }
    }
   
    return false;
    
}

result = firstd(JSON.parse(json1d),"a")


console.log(
    result?
        result[0]["copy"]
            [result[0]["ubic"][0]]
            [result[0]["ubic"][1]]
        :"Undefined");

//bucle(json2d)
//bucle(json3d)
//bucle(json4d)
//bucle(json5d)
//(key === find) ?"yes":"no"