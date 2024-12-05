import { getUsuariosRepository } from "../repository/usuario.js";

//Obtener todos los usuarios
export const getUsuariosService = async () => {
    try {
        return await getUsuariosRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obtener los usuarios');
    }
}