require('dotenv').config()

const packagejson = require('../package.json')

const {
    MONGODB_URI,
    PORT = 8080,
} = process.env

module.exports = {
  PORT,
  SERVICE_NAME: `${packagejson.name}:${packagejson.version}`,
  MONGODB_URI,
}
