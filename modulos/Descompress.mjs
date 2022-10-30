/**
 * Autor : @C4b3C4nC3r
 * Last Change : oct232022
 */

import Fed from "./Fed.mjs";

export default class Descompress {
    constructor(json, find) {
        this.json = json
        this.find = find
    }

    /**
     * @params {json,data,find,subdata,result}
     * 
     * Buscar si existe un clave o etiqueta en el objeto o documento
     * 
     * # return {result}
     * El resultado que dara es un False en el caso de no encontrarlo, en lso distintos niveles del documento u objeto
     * Y en el caso de encontrarlo retornara un objeto/array que nos indicara la siguiente estructura
     * 
     *  result = [{
     *      "ubic":[0,null],
     *      "value":[null],
     *      "copy": data,
     *      "dim":dim
     *   }]
     * 
     *  subdata = {
            "sububic":[],
            "subdim":1,
            "data":[]
        }
     * 
     *  repData = [
     *      {
     *          data = [
     *              {rep},
     *               {rep},
     *               ...
     *               ],
     *           
     *       }
     *   ]
     * 
     */
    
    desfract(){
        let json = this.json;
        let data = this.json;
        let find = this.find;
        let subdata = {
            "sububic":[],
            "subdim":1,
            "data": []
        }
        let repData = {
            "data":[
                
            ]
        }
        let result = false;

        for (const index in json) {
            if (Object.hasOwnProperty.call(json, index)) {
                const element = json[index];
                for (const key in element) {
                    if (Object.hasOwnProperty.call(element, key)) {
                        const valor = element[key];
                        if(key === this.find){
    
                            result = Fed.fejd(data,key,valor,index,false)
                        }else{
                            if(typeof(valor) === "object"){
                                subdata["data"].push(valor)
                                
                            }
                            
                        }
                        
                    }
                }
                
                
            }
        }
    

        if(!(!subdata["data"].length)){

            result = (!result.length)?Fed.ferd(subdata["data"],find):result;
        }
        return result;

    }
}