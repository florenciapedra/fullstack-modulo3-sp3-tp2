import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}

//Crear superhéroe
export async function crearSuperheroe(superheroe){
    const nuevoSuperheroe = await superHeroRepository.crear(superheroe);
    return nuevoSuperheroe;
}
//Actualizar superhéroe
export async function actualizarSuperheroe(id, data) {
    await superHeroRepository.actualizar(id, data);
    return await superHeroRepository.obtenerTodos();
}
//Borrar superhéroe por ID
export async function borrarSuperheroePorID(id) {
    return await superHeroRepository.borrarPorID(id);
}

//Borrar superhéroe por nombre
export async function borrarSuperheroePorNombre(nombre) {
    return await superHeroRepository.borrarPorNombre(nombre);
}