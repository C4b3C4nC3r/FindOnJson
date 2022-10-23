
class Fed{


    static fejd(data,key, valor, index) {
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
    
    static fejr(valor, find){
        const Descompress = require("./Descompress.js")

        descompress = new Descompress(valor,find)
    
        descompress.descompress()

    }

}