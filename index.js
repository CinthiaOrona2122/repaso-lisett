import express from "express";
const app = express();
//Configuraciones de credenciales de DB y otros.
import { express_config } from "./config.js";
//Rutas
import usuarioRoutes from "./routes/usuario.js";

app.set("port", express_config.port);  //Es lo mismo que poner const PORT=3000
app.set("host", express_config.host);  //Es lo mismo que poner const HOST="127.0.0.1"

//Middlewares
app.use(express.json());
app.use(usuarioRoutes);
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de usuarios');
});

//Log de inicio de servidor
app.listen(app.get("port"), app.get("host"), () => {
    console.log(
        `Servidor corriendo en 'http://${app.get("host")}:${app.get("port")}`
    );
});
