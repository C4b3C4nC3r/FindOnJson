
# SCRIPT TO FIND A ELEMENT ON FILE.JSON



## INSTALL DEPENDECE


Consulta en (Node)[https://nodejs.org/en/], para su instalacion, te recomiendo desde la app, para intalarla verison mas reciente


## USO (NOW TRAIN AND TEST)

```bash

    git clone "https://github.com/C4b3C4nC3r/FindOnJson.git"

```

```bash

    cd /FindOnJson

```

```bash

    node test

```

Tienes que abrir el test.js y empesar a jugar con las dimesiones

tambien puedes interactuar con los file.json


### NOW 

- [+] old 
    > Descompress.js
    > Fed.js
    > script.js

- [+] modulos
    > Descompress.js
    > Fed.js
    
- [+] ./
    > test.js


## OBJECT

This scrip to find elements of json , in 1 to 6 dimensions

## DEPENDECE 
- NODE (npm now)


### PLATAFORM

- [x] WINDOWS
- [x] LINUX


#### Errores (28/10/2022)

- [1] Si existen elementos con el mismo nombre, escoje el ultimo 
- [2] Ubicacion no es precisa
- [3] Dimension no se aumenta

### SOluciones (No implementadas, solo teorisadas 28/10/2022)
- [1] Lo pondra en un array u objeto que contenga 

    ```bash
        
        repData = [
            {
                data = [
                    {rep},
                    {rep},
                    ...
                    ],
                
            }
        ]

    ```

la variable `rep` es igual alresultado de la funcion de `Fed.fejd(data,key,valor,index)`, solo que este estara dentro
de repData.

** Caso que existan elementos repetidos **, caso que no haya se procedera lo normal

- [2] Este caso sucede cuando, no se encontro en nivel 2 o dimension dos un elemento, por el cual se procedera a usar la variable `subdata` esta tendra un nuevo elemento llamado `sububic` que agregara cada vuelta un nuevo elemento o ubicacion a este eleemnto, para asi tener una ubicacion mas lejible a la hora de retornar en la variable `result`.

- [3] Similar al caso anterior, solo se hara una nueva variable que aumentara seguncada vuelta, el elemento se llamara `subdim`


Esto es es solucion teorica puede que cambie un poco, pero mas o menos ais funcionase.

