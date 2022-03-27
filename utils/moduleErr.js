class moduleErr extends Error {
  constructor(message) {
    super()
    this.name = '[Cache Error]'
    this.message = message
  }
}

module.exports = moduleErr
