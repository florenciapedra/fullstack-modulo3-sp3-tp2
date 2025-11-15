import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        const query = {};
        
        if (!isNaN(valor) && valor !== '') {
            query[atributo] = Number(valor);
        } else {
            query[atributo] = valor;
        }

        return await SuperHero.find(query);
    }

/* 
    async buscarPorAtributo(atributo, valor) {
        const filtro = {};
        filtro[atributo] = valor;
        return await SuperHero.find(filtro);
}

*/
    
    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 } });
    }

    //Crear superhéroe
    async crear(superheroe) {
        const nuevoSuperheroe = new SuperHero(superheroe);
        return await nuevoSuperheroe.save();
    }

    // Actualizar superhéroe
    async actualizar(id, data) {
        await SuperHero.findByIdAndUpdate(id, data, { new: true });
        return await SuperHero.find();
    }

    //Borrar superhéroe por ID
    async borrarPorID(id) {
        const superheroeBorrado = await SuperHero.findByIdAndDelete(id);
            if (!superheroeBorrado) {
            throw new Error('Superhéroe no encontrado');
        }
        return superheroeBorrado;
    }

    //Borrar superhéroe por nombre
    async borrarPorNombre(nombre) {
        const superheroeBorrado = await SuperHero.findOneAndDelete({ nombreSuperheroe: nombre });
            if (!superheroeBorrado) {
            throw new Error('Superhéroe no encontrado');
        }
        return superheroeBorrado;
    }
}

export default new SuperHeroRepository();