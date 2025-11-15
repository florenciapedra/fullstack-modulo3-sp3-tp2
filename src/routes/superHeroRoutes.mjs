import express from 'express';

import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, crearSuperheroeController, actualizarSuperheroeController, borrarSuperheroePorIDController, borrarSuperheroePorNombreController } 
from '../controllers/superheroesController.mjs';

import { validarSuperheroe } from '../validators/superheroesValidator.mjs';
import { validationError } from '../validators/validationResult.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.post('/heroes', validarSuperheroe, validationError, crearSuperheroeController);
router.put('/heroes/:id', actualizarSuperheroeController);
router.delete('/heroes/:id', borrarSuperheroePorIDController);
router.delete('/heroes/nombre/:nombre', borrarSuperheroePorNombreController)

export default router;