/**
 * Autor : @C4b3C4nC3r
 * Last Change : oct232022
 */

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
     *  "dim":0
     * }]
     * 
     * reemplaza los valores de los eleemtos de por defecto, el caso si existe datos,
     * 
     */

    static fejd(data,key,valor,index){
        let result = [{
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

}