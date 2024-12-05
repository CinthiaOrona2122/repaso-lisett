import { Usuario } from "./model/Usuario.js";
import { connect } from "../database/db.js";

connect();

//Obtener todos los usuarios
export const getUsuariosRepository = async () => {
    try {
        const usuarios = await Usuario.find();
        return usuarios;
    } catch (error) {
        console.error("Error en el Repositorio: ", error);
        throw new Error(
            'Error al consultar por la coleccion "usuarios" en la base de datos'
        );
    }
};