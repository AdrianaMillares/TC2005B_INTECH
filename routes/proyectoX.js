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

router.use(bodyParser.urlencoded({extended: false}));

/**
 * @brief Coneccion con cada proyecto y sus subrutas dependiendo del id de este
 */
router.get('/:id_proyecto/puntos-agiles', proyectoXController.getPA);
router.get('/:id_proyecto/casos-uso', proyectoXController.getCasoUso);
router.post('/:id_proyecto/casos-uso', proyectoXController.postNuevoCaso);
router.post('/:id_proyecto/airtable', proyectoXController.postAirtable);
router.get('/:id_proyecto/airtable', proyectoXController.getAirtable);
router.get('/:id_proyecto', proyectoXController.getProyectoX);
router.get('/:id_proyecto/airtable_data', proyectoXController.getAirtableData);
router.get('/:id_proyecto/db_data', proyectoXController.getTareas);
router.post('/:id_proyecto/sync/update_airtable', proyectoXController.postUpdateAirtable);

module.exports = router;

// , isAuth