# Plus Cache 💾
# Información
Plus Cache es un módulo de caché completo que permite limitar los datos guardados, diferenciar entre tipos de datos (keys) e incluso importar archivos `JSON` para introducirlos en la caché.

# Instalación
¡Use en su consola `npm i pluscache` y empiece a disfrutar! Puede también instalar el módulo con `npm i https://github.com/167BOT/PlusCache.git` usando Github.

# Sintaxis
El módulo es completamente síncrono y fácil de usar. Puede ver a continuación las funciones.

# Clase `Cache(Options)`
| Options | |
| -- | --
limitData | Limita los datos que pueden entrar en caché. Por defecto, pueden entrar los datos que quieras. Recibe un `Number`
differenceTypesKeys | Diferencia entre los tipos de datos en las keys (ej: `1 == '1'`). Por defecto, es `true`. Recibe un `Boolean`

# Funciones
La clase incluye diversas funciones para controlar su caché de forma sencilla. Todas ellas son asíncronas.

## insert(Key, Value)
Inserta datos en la caché de forma rápida.

| Propiedades | |
| -- | --
Key | La key para acceder al valor.
Value | El valor que quieres darle a la key

```js
const Cache = require('pluscache')
const myCache = new Cache({limitData: 100})//limit data for 100 key:value

let insert = myCache.insert('names', [{name: 'Coco'}])

/*
{
  sucess: true,
  getThis: { data: { names: [Array] }, length: 3 },
  length: 3
}
*/
```

## getOne(Key)
Obtén un solo dato de forma sencilla y rápida.

| Propiedades | |
| -- | -- |
Key | El identificador del valor que se está buscando

```js
let get = cache.getOne('names')

/*
{ data: { names: [ [Object] ] }, length: 1 }
*/
```

## getAll()
Obtén todos los datos que hay en caché de forma sencilla.

```js
cache.insert('guilds', [{guild: 'La Fortaleza'}])
cache.insert('ids', [{id: 1}])

let all = cache.getAll()

/*
{
  data: [ { names: [Array] }, { guilds: [Array] }, { ids: [Array] } ],
  length: 3
}
*/
```

## update(Key, Value)
Actualiza de forma rápida y sencilla cualquier identificador-valor.

| Propiedades | |
| -- | -- |
Key | El identificador al cuál quieres editar su valor
Value | El valor por el que quieres reemplazar el anterior valor

```js
let getTwo = cache.getOne('names').data.names
getTwo.push({name: 'Mia'})

let update = cache.update('names', getTwo)

/*
{
  sucess: true,
  getThis: { data: { names: [Array] }, length: 3 },
  length: 3
}
*/
```

## hasKey(Key)
Busca y verifica de forma sencilla si hay un identificador

| Propiedades | |
| -- | --
Key | El identificador que vas a verificar su existencia

```js
let hasTrue = cache.hasKey('names')//true

/*
{ sucess: true, has: { data: { names: [Array] }, length: 3 } }
*/

let hasFalse = cache.hasKey('games')//false

/*
{ sucess: true, has: false }
*/
```

## iterable()
Itera toda la caché de forma fácil

```js
let iterable = cache.iterable()

for (let data of iterable) {
    console.log(`ID: ${data[0]} | Nombre: ${Object.keys(data[1])[0]}`)
}

/*
ID: 0 | Nombre: names
ID: 1 | Nombre: guilds
ID: 2 | Nombre: ids
*/
```

## saveJSON(Pathway, Name)
Guarda dentro de un archivo `JSON` todos los datos de la caché

| Propiedades | |
| -- | --
Pathway | La ruta donde quieras guardar el archivo. Recibe un `String`
Name | El nombre del archivo (opcional). Recibe un `String`

```js
let save = cache.saveJSON(`./path/to`)//without name. Sometimes have some problems

/*
{
  sucess: true,
  json: '{"data":[{"names":[{"name":"John"},{"name":"Mia"}]},{"guilds":[{"guild":"La Fortaleza"}]},{"ids":[{"id":1}]}],"length":3}',
  path: 'C:\\Users\\xxx\\Desktop\\myProject\\test\\DBBZdcVKgQ==.json'
}
*/

let save = cache.saveJSON(`./path/to`, 'test')//with name

/*
{
  sucess: true,
  json: '{"data":[{"names":[{"name":"John"},{"name":"Mia"}]},{"guilds":[{"guild":"La Fortaleza"}]},{"ids":[{"id":1}]}],"length":3}',
  path: 'C:\\Users\\xxx\\Desktop\\myProject\\test\\test.json'
}
```

## importJSON(Pathway)
Importa archivos JSON para introducirlos en la caché.

| Propiedades | |
| -- | --
Pathway | La ruta donde quieras guardar el archivo. Recibe un `String`

```js
let importJSON = cache.importJSON('./path/to/test.json')

/*
{
  sucess: true,
  getThis: { data: [ [Object], [Object], [Object] ], length: 3 }
}
*/
```
