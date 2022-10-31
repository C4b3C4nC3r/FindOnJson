/**
 * Autor : @C4b3C4nC3r
 * Last Change : oct302022
 */

import Descompress from "./Descompress.mjs";

export default class Fed {

    /**
     * 
     * @param {object} data 
     * @param {string} coor 
     * @param {*} valor 
     * @param {int} dim 
     * @returns result = [
     *  {
     *      "coor":coor,
     *      "value":[
     *          ...
     *       ],
     *      "copy: data",
     *      "dim":dim
     *  }
     * ]
     */

    static fejd(data,coor,valor,dim){
        let result = [{
            "coor":coor,
            "value":[null],
            "copy": data,
            "dim":(dim===false)?1:dim
        }]
    
    
        result[0]["value"] = valor;
    
            
        return result
    }

    /**
     * 
     * @param {object} data 
     * @param {string} find 
     * @returns Funcion desfract de descompress
     * 
     * Uso para seguir con el seguimiento y bsuqueda en los objectos enviados
     * 
     */

    static ferd(data,find){
    
        let dess = new Descompress(data,find);

        return dess.desfract();

    }

    /**
     * 
     * @param {int} index 
     * @param {string} key 
     * @returns coor
     */

    static keytocoor(index,key){

        let coor = "0";

        return coor;


    }
}