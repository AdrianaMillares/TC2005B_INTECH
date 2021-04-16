/**
 * @brief Ruta hacia los proyectos individuales
 * @param {*} proyectoXController -> Conexión con el controlador
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const isAuth = require('../utils/is-auth');
const bodyParser = require('body-parser');

const proyectoXController = require('../controllers/proyectoX_controller');
const { Router } = require('express');

router.use(bodyParser.urlencoded({ extended: false }));

/**
 * @brief Coneccion con cada proyecto y sus subrutas dependiendo del id de este
 */
router.post('/:id_proyecto/puntos-agiles/tarea', isAuth, proyectoXController.postNuevaTarea);
router.post('/:id_proyecto/puntos-agiles/fase', isAuth, proyectoXController.postNuevaFase);
router.post('/:id_proyecto/puntos-agiles/PA', isAuth, proyectoXController.postValorPA);
router.get('/:id_proyecto/puntos-agiles', isAuth, proyectoXController.getPA);

router.get('/:id_proyecto/casos-uso', isAuth, proyectoXController.getCasoUso);
router.post('/:id_proyecto/casos-uso', isAuth, proyectoXController.postNuevoCaso);
router.post('/:id_proyecto/casos-uso/tareas', isAuth, proyectoXController.postGuardarTareas);

router.post('/:id_proyecto/airtable', proyectoXController.postAirtable);
router.get('/:id_proyecto/airtable', isAuth, proyectoXController.getAirtable);

// Peticiones AJAX de Airtable
router.get('/:id_proyecto/airtable_data', proyectoXController.getAirtableData);
router.get('/:id_proyecto/db_data', proyectoXController.getTareas);
router.post('/:id_proyecto/sync/update_airtable', proyectoXController.postUpdateAirtable);

router.get('/:id_proyecto', isAuth, proyectoXController.getProyectoX);

module.exports = router;

// , isAuth