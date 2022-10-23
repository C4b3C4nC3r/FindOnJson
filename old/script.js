let fs = require('fs');
import {Descompress} from "./Descompress.js"


json1d = fs.readFileSync("./json-Example/1d.json","utf-8")//unidimencional
json2d = fs.readFileSync("./json-Example/2d.json","utf-8")//bidimencional
json3d = fs.readFileSync("./json-Example/3d.json","utf-8")//tridimencional
json4d = fs.readFileSync("./json-Example/4d.json","utf-8")//tetradimencional
json5d = fs.readFileSync("./json-Example/5d.json","utf-8")//quintadimencional




let des = new Descompress(JSON.parse(json1d),"a")

console.log(des);