/**
 * Import
 */


let fs = require('fs');



json1d = fs.readFileSync("./json-Example/1d.json","utf-8")//unidimencional
json2d = fs.readFileSync("./json-Example/2d.json","utf-8")//bidimencional
json3d = fs.readFileSync("./json-Example/3d.json","utf-8")//tridimencional
json4d = fs.readFileSync("./json-Example/4d.json","utf-8")//tetradimencional
json5d = fs.readFileSync("./json-Example/5d.json","utf-8")//quintadimencional

//console.log(json1d);

function fejd(data,key, find, valor, index) {
    //console.log(typeof(json));
    
    result = [{
        "ubic":[0,null],
        "value":[null],
        "copy": data,
        "dim":0
    }]


    result[0]["value"] = valor;
    result[0]["ubic"] = [index,key]
    result[0]["dim"] =+1   

        
    return result
    
    
}

function fejr(valor, find){

    
    console.log(valor);
}

function descompress (json,find){

    let data = json;
    for (const index in json) {
        if (Object.hasOwnProperty.call(json, index)) {
            const element = json[index];
            for (const key in element) {
                if (Object.hasOwnProperty.call(element, key)) {
                    const valor = element[key];
                    if(key === find){
                        return fejd(data,key,find,valor,index)

                    }
                    
                }
            }             
        }
    }
   

}


result = descompress(JSON.parse(json2d),"b")


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



