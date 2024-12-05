import { mongoose } from "mongoose";
import { db_config } from "../config.js";

//Esta cadena es mia, la tenes que cambiar por la tuya
const URI = `mongodb+srv://${db_config.user}:${db_config.password}@${db_config.database}.86no8.mongodb.net/?retryWrites=true&w=majority&appName=${db_config.database}`;
export async function connect() {
    try {
        await mongoose.connect(URI);
        console.log("DB MongoDB Conectada correctamente");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
