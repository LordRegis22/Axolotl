// CONNECTION TO DATABASE

const { Pool } = require('pg')

const PG_URI = 'postgres://mdgfowmq:p35qJM38pdlqmcjoHCegNLUiDieNcgLk@lallah.db.elephantsql.com:5432/mdgfowmq'

const pool = new Pool({connectionString: PG_URI})

module.exports = {
    query: (text, params, cb) => {
        console.log('executed query', text)
        return pool.query(text, params, cb)
    }
}

