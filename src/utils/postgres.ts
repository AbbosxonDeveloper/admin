import { Pool } from "pg";
import dotenv from "dotenv"
import { pgConfig } from "../config/config";
import { ErrorHandle } from "../error/error";
dotenv.config()

const pool = new Pool({
    connectionString: pgConfig 
})

class PG {
    private pool = pool

    async fetchAll <T>(SQL: string, ...params: (string | number | boolean | null)[]): Promise<T[]> {
        const client = await this.pool.connect()
        try {
            const { rows } = await client.query(SQL, params)
            
            return rows
        } catch (error) {
            console.log(error)
            throw new ErrorHandle('Error in Database', 500)
        } finally {
            await client.release()
        }
    }

    async fetchOne <T>(SQL: string, ...params: (string | number | boolean | null)[]): Promise<T>  {
        const client = await this.pool.connect()
        try {
            const { rows: [ rows ] } = await client.query(SQL, params)

            return rows
        } catch (error) {
            console.log(error)
            throw new ErrorHandle('Error in Database', 500)
        } finally {
            await client.release()
        }
    }
}

export default new PG() 
// SingleTon pattern Generate<>