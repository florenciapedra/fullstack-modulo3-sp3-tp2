import { body } from 'express-validator';

export const validarSuperheroe = [
  body('nombreSuperheroe')
    .trim()
    .notEmpty().withMessage('El nombre del superhéroe es requerido')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres'),

  body('nombreReal')
    .trim()
    .notEmpty().withMessage('El nombre real es requerido')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres'),

  body('edad')
    .notEmpty().withMessage('La edad es requerida')
    .isNumeric().withMessage('La edad debe ser un número')
    .isInt({ min: 0 }).withMessage('La edad debe ser un número mayor o igual a 0'),

  body('poderes')
    .isArray({ min: 1 }).withMessage('El array debe proporcionar al menos un poder')
    .custom((poderes) => {
      if (!poderes.every(poder => typeof poder === 'string')) {
        throw new Error('Cada poder debe ser un string');
      }

      return true;
    }),
    
  body('poderes.*')
    .trim()
    .notEmpty().withMessage('Los poderes no pueden estar vacíos')
    .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres'),
];