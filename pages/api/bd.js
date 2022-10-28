const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  password: 129,
  host: 'localhost',
  port: 5432,
  database: ''
})

module.exports = pool