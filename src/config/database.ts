import knex from "knex";
import dotenv from 'dotenv'

dotenv.config()

export const db = knex({
    client : 'mysql2',
    connection : {
        host: process.env.db_host,
        user: process.env.db_user,
        password: process.env.db_password,
        database: process.env.db_database,
    },
    pool: {
        min: 2,
        max: 10
    }
})