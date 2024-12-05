import {
    getUsuariosService
} from "../services/usuario.js";

//Obtener todos los usuarios
export const getUsuariosController = async (req, res) => {
    try {
        let usuarios = await getUsuariosService();
        if (usuarios.length === 0) {
            return res.status(200).send("La Base de datos está vacía");
        }
        return res.status(200).send(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error al obtener los usuarios" });
    }
};