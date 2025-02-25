import dotenv from 'dotenv'
import type { Knex } from 'knex'

dotenv.config()

const config : Knex.Config = {
    client : 'mysql2',
    connection : {
        host: process.env.db_host,
        user: process.env.db_user,
        password: process.env.db_password,
        database: process.env.db_database,
    },
    migrations: {
        tableName: "knex_migrations",
        directory: "./migrations"
    }
}

export default config