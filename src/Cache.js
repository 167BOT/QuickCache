const moduleErr = require('../utils/moduleErr.js');
const fs = require('fs')
const path = require('path');
const crypto = require('crypto');

class Cache extends Map {
  #limit;
  #diffkeys;

  constructor(opts = {limitData: false, differenceTypesKeys: true}) {
    super()

    if (opts?.limitData && !parseInt(opts?.limitData)) throw new moduleErr('El limitante debe ser un número')

    this.#limit = opts?.limitData ?? false;
    this.#diffkeys = opts?.differenceTypesKeys;
  }

  insert(key, value) {
    if (this.size == this.#limit) return {sucess: false, message: `Has llegado al límite establecido`}

    if (!key) throw new moduleErr('Añade la key')
    if (this.#diffkeys) key = `${key}`
    if (!value) throw new moduleErr('Añade el valor')
    if (this.has(key)) throw new moduleErr(`La llave ${key} ya existe`)

    this.set(key, value)

    return {sucess: true, getThis: this.getOne(key), length: this.size}
  }

  update(key, value) {
    if (!key) throw new moduleErr('Añade la key')
    if (this.#diffkeys) key = `${key}`
    if (!value) throw new moduleErr('Añade el valor')
    if (!this.has(key)) throw new moduleErr(`La llave ${key} no existe`)

    this.set(key, value)

    return {sucess: true, getThis: this.getOne(key), length: this.size}
  }

  getOne(key) {
    if (!key) throw new moduleErr('Añade la key')
    if (this.#diffkeys) key = `${key}`
    if (!this.has(key)) throw new moduleErr(`La llave ${key} no existe`)

    let value = this.get(key)
    let object = {}
    object[key] = value//set key:value format

    return {data: object, length: this.size}
  }

  getAll() {
    let array = []

    for (let key of this.keys()) {
      let object = {}
      object[key] = this.get(key)

      array.push(object)
    }

    return {data: array, length: this.size}
  }

  hasKey(key) {
    if (!key) throw new moduleErr('Añade la key')

    let searched = !this.has(key) ? false : this.getOne(key)

    return {sucess: true, has: searched}
  }

  iterable() {
    const all = this.getAll().data

    return all.entries()
  }

  saveJSON(pathway = null, name = null) {
    let all = this.getAll().data
    if (!pathway) throw new moduleErr('Añade un directorio donde guardar el archivo')
    if (all.length < 1) throw new moduleErr('No hay ningún valor que guardar')

      try {
        let folder = fs.readdirSync(pathway)
        name = name ?? crypto.randomBytes(7).toString('base64');

        let file = fs.writeFileSync(path.resolve(pathway)+'/'+name+'.json', JSON.stringify(all))
      } catch (e) {
        throw new moduleErr(`Algo ha fallado, más información:\n${e.message}`)
      }

    return {sucess: true, json: JSON.stringify(all), path: path.resolve(pathway+`/${name}.json`)}
  }

  importJSON(pathway = null) {
    if (!pathway) throw new moduleErr('Añade un directorio donde guardar el archivo')

    const json = require(path.resolve(pathway))
    if (!Array.isArray(json)) throw new moduleErr('El JSON debe de ser un array con objetos, usa la función saveJSON')

    for (let obj of json.values()) {
      let key = Object.keys(obj)

      this.insert(key[0], obj[key])
    }

    return {sucess: true, getThis: this.getAll()}
  }
}

module.exports = Cache
