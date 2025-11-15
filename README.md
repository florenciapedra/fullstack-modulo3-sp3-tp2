# Ejercicios Módulo 3 - Sprint 3 - Trabajo Práctico 2

Este repositorio contiene la estructura de un proyecto desarrollado con Node.js, Express y MongoDB:

- carpeta llamada `config`: contiene la configuración de conexión a la base de datos MongoDB.
- carpeta llamada `controllers`: contiene los controladores que manejan las solicitudes HTTP y utilizan la capa de servicios para obtener datos.
- carpeta llamada `models`: define las estructuras de datos utilizadas en el proyecto mediante esquemas de Mongoose.
- carpeta llamada `repositories`: implementa la capa de persistencia.
- carpeta llamada `services`: contiene la lógica de negocio para las distintas operaciones.
- carpeta llamada `views`: define los datos en el formato adecuado para las respuestas.
- carpeta llamada `routes`: define las rutas de la API y las asocia con los controladores correspondientes.
- carpeta llamada `validators`: contiene las reglas que definen las validaciones.
- archivo `app.mjs`: configura el servidor Express, conecta a MongoDB y maneja las solicitudes a las diversas rutas, incluyendo el manejo de errores para rutas no definidas.
- archivos `package.json` y `package-lock.json`: contienen la configuración de dependencias del proyecto.

## Notas adicionales
- La carpeta `node_modules/` fue excluida del repositorio mediante `.gitignore`.
- El archivo `.env` fue excluido del repositorio mediante `.gitignore`.

## Validaciones

Este proyecto utiliza `express-validator` para validar los datos de entrada en los endpoints. Las reglas se definen en `validators/superheroesValidator.mjs` y se aplican en las rutas correspondientes. Los errores se manejan mediante el middleware `validationResult.mjs`.