import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contratis',
    port: 3306
}

const connection = await mysql.createConnection(config);

export class MovieModel {
  static async getAll ({ genre }) {
    const [result, tableInfo] = await connection.query('select *From parameters');
    console.log(result);
    return result;
  }

  static async getById ({ id }) {
    
  }

  static async create ({ input }) {
    
  }

  static async delete ({ id }) {
    
  }

  static async update ({ id, input }) {
    
  }
}
