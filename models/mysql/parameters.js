import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contratis',
    port: 3306
}

const connection = await mysql.createConnection(config)

export class ParametersModel {
    static async getAll ({ tipo }) {
        if(tipo) {
            const lowerCaseTipo = tipo.toLowerCase()

            const [ result ] = await connection.query(`SELECT *FROM parameters WHERE lower(tipo) = ?;`, [lowerCaseTipo])

            return result
        }

        const [ result, tableInfo ] = await connection.query('SELECT *FROM parameters;')

        return result
    }

    static async getById ({ id }) {
        const result = await connection.query(`SELECT *FROM parameters WHERE id = ?;`, [id])
    }
}