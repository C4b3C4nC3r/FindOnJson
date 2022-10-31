/**
 * Autor : @C4b3C4nC3r
 * Last Change : oct302022
 */

import Fed from "./Fed.mjs";

export default class Descompress {
    /**
     * 
     * @param {object} json 
     * @param {string} find 
     */
    constructor(json, find) {
        this.json = json
        this.find = find
    }

    /**
     * Funcion que desfrcatmenta por elemento y busca con la variable find, en cada desfractamiento
     * 
     * @returns 
     * 
     * result = [{
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
        let coor = "0"

        for (const index in json) {

            if (Object.hasOwnProperty.call(json, index)) {
                const element = json[index];
                for (const key in element) {
                    if (Object.hasOwnProperty.call(element, key)) {
                        const valor = element[key];
                        coor = Fed.keytocoor(index,key)
                        if(key === this.find){
                            result = Fed.fejd(data,coor,valor,false)
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

        
        
        return (!this.memo())?result:"Problem for render coor and dim, no found .memo in dir";

    }

    /**
     * 
     * La funcion hara lo que dice la nota
     * 
     * @returns bool
     * 
     * Nota: crear un json para guardar y aumentar la dimension segun el bulce
     * 
     * Arg:
     * 
     * 
     * al indicar un incremento, imprimiendo en consola,lasveces de que imprime indica la dimencion del json
     * por ende se debe de crear un json, destiando al conteo de las dimensiones,
     * 
     * 
     * Ej. 5d 
     * 
     * 
     *  * *genera un file.json => {
     *  "dim":1
     * }
     * 
     * cuando vueova a llamar la funcion, este verificara si existe un file.json, y veriicara si existe el dim
     * 
     * 
     * >> caso contrario finalizara la operacion por error, y solamente se necesita ejecutarlo de nuevo.
     * 
     * << caso que si exista, el file.json, este accedera y aumentara o sumara un +=1 al elemento dim, para de esta manera saber 
     * la dimension del presete .json que se esta trabajando en el script
     * 
     * Aqui tambien se organizara las coordenas, si se haya el eelemtno que esta buscando, en formato string, en l elemento coor
     * 
     * 
     * resullt ///
     * 
     * 
     * 
     * FileJson.json => 
     * {
     *      "dim":1,
     *      "coor":"0"
     * 
     * }
     */

    memo (){
        let result = false;

        //write code



        return result
    }
}


/**
 * 
 * Nota: crear un json para guardar y aumentar la dimension segun el bulce
 * 
 * Arg:
 * 
 * 
 * al indicar un incremento, imprimiendo en consola,lasveces de que imprime indica la dimencion del json
 * por ende se debe de crear un json, destiando al conteo de las dimensiones,
 * 
 * 
 * Ej. 5d 
 * 
 * 
 * **genera un file.json => {
 *  "dim":1
 * }
 * 
 * cuando vueova a llamar la funcion, este verificara si existe un file.json, y veriicara si existe el dim
 * 
 * 
 * >> caso contrario finalizara la operacion por error, y solamente se necesita ejecutarlo de nuevo.
 * 
 * << caso que si exista, el file.json, este accedera y aumentara o sumara un +=1 al elemento dim, para de esta manera saber 
 * la dimension del presete .json que se esta trabajando en el script
 * 
 * Aqui tambien se organizara las coordenas, si se haya el eelemtno que esta buscando, en formato string, en l elemento coor
 * 
 * 
 * resullt ///
 * 
 * 
 * 
 * FileJson.json => 
 * {
 *      "dim":1,
 *      "coor":"0"
 * 
 * }
 * 
 */