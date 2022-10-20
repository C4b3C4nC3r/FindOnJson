class Descompress {

    constructor (json, find){
        this.json = json;
        this.find = find;
    }

    descompress (){
        
        let result ;
        let data = this.json;
        let subdata = []
        for (const index in json) {
            if (Object.hasOwnProperty.call(json, index)) {
                const element = json[index];
                for (const key in element) {
                    if (Object.hasOwnProperty.call(element, key)) {
                        const valor = element[key];
                        if(key === this.find){
    
                            result =  Fed.fejd(data,key,valor,index)
                            
                        }else{
                            if(typeof(valor) === "object"){
                                subdata.push(valor)
                                
                            }
                            
                        }
                        
                    }
                }
                
                
            }
        }
    
        if(!(!subdata.length)){
            result = Fed.fejr(subdata,find)
        }
        return result;
    }
    
}