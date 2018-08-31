const ParcelDefaultBundler = require("parcel-bundler")

class jsonType extends ParcelDefaultBundler.Asset {

  parse(source) {
    this.code = JSON.parse(source)
  }

  generate() {
    return {
      js: `module.exports = ${JSON.stringify(
        JSON.parse(JSON.stringify(this.code))
      )}`
    }
  }

}

module.exports = jsonType
