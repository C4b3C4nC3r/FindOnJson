/**
 * Autor : @C4b3C4nC3r
 * Last Change : oct232022
 */

import Descompress from "./Descompress.mjs";

export default class Fed {

    /**
     * 
     * @params {data,key,valor,index}
     * 
     * 
     * Retornara un resultado con los datos enviados de Descompress
     * 
     * Estructura del array de resultado
     * 
     * result = [{
     *  "ubic":[],
     *  "value":[],
     *  "copy":[],
     *  "dim": por defaul sera 1
     * }]
     * 
     * reemplaza los valores de los eleemtos de por defecto, el caso si existe datos,
     * 
     */

    static fejd(data,key,valor,index,dim){
        let result = [{
            "ubic":[0,null],
            "value":[null],
            "copy": data,
            "dim":(dim===false)?1:dim
        }]
    
    
        result[0]["value"] = valor;
        result[0]["ubic"] = [index,key]
    
            
        return result
    }


    static ferd(data,find){
    
        let dess = new Descompress(data,find);

        return dess.desfract();

    }

}