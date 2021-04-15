const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  "development":{
    "storage":"./dev.sqlite3",
    "dialect":"sqlite"
  },
  "postgre": {
    "username":process.env.DB_USERNAME,
    "password":process.env.DB_PASSWORD,
    "database":process.env.DB_DATABASE,
    "host":process.env.DB_HOST,
    "dialect":"postgres"
  },
  "test": {
    "username":process.env.DB_USERNAME,
    "password":process.env.DB_PASSWORD,
    "database":process.env.DB_DATABASE,
    "host":process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username":process.env.DB_USERNAME,
    "password":process.env.DB_PASSWORD,
    "database":process.env.DB_DATABASE,
    "host":process.env.DB_HOST,
    "dialect": "mysql"
  }
}
