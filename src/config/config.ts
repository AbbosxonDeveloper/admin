import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 2004;

const pgConfig = process.env.DATABASE;

const secretKey: string = process.env.SECRET_KEY || "qale";

export {PORT,pgConfig,secretKey};