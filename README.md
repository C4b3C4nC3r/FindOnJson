# FindOnJson
Un buscador de elemntos en json

# Glosarry
-> -> descripciones, o datos

=> -> dentro de, o contiene 

[] -> array

{} -> object

"" -> elementos

v -> value

... -> sucesivamente
# Tutorial

./json-Example => Encontrareos ejemplos de varios JSON, con sus distintas dimensiones.

1 D => [ =>
    { => "" => v},   
    { => "" => v},   
    { => "" => v}   
]

2 D => 
[   =>
    {
        => "" => {
            => "" => v
        }
    },
    {
        => "" => {
            => "" => v
        }
    },
    {
        => "" => {
            => "" => v
        }
    }
]


*Siempre hay que poner [] antes del {}

usar fs:

// ~ let fs = requiere('fs')

// ~ json = fs.readFileSync(locate,"utf-8")

// ~ result = firstd(JSON.parse(json),lo-que-buscas)

// ~ console.log(
    result?
        result[0]["copy"]
            [result[0]["ubic"][0]]
            [result[0]["ubic"][1]]
        :"Undefined");

si es false ->  Undefined o indefinida
si es encunetra retornara un object / array con los datos necesarios para su uso, como en la consola anterior

copia el codigo y pegalo aun esta en planeacion, cuando lo empaquete para hacer una dependencia o un modulo o libreria para su uso mas de desarrollo uwuw