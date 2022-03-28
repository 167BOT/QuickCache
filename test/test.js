const Cache = require('../src/Cache.js')

const cache = new Cache({differenceTypesKeys: true})
//let importJSON = cache.importJSON(`./test.json`)

//return console.log(importJSON)
let insert = cache.insert('names', [{name: 'John'}])
let get = cache.getOne('names')

cache.insert('guilds', [{guild: 'La Fortaleza'}])
cache.insert('ids', [{id: 1}])

let all = cache.getAll()
let getTwo = cache.getOne('names').data.names
getTwo.push({name: 'Mia'})
let update = cache.update('names', getTwo)

let hasTrue = cache.hasKey('names')
let hasFalse = cache.hasKey('games')

let iterable = cache.iterable()


for (let data of iterable) {
    console.log(`ID: ${data[0]} | Nombre: ${Object.keys(data[1])[0]}`)
}

let save = cache.saveJSON(__dirname, 'test')
