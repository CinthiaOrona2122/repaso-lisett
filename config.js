import { config } from "dotenv";
config();  //Este método va inmediatamente después de importar dotenv

//Credenciales de conexión de la base de datos
const db_config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
};

//Variables HOST y PORT
const express_config = {
    port: process.env.PORT,
    host: process.env.HOST,
};

export { db_config, express_config };