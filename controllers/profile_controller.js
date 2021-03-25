const express = require('express');
const contextInit = require('../utils/context_manager');
const router = express.Router();

const profile = require('../models/profile');
const email_usuario = 'Daniel@hotmail.com';


exports.getProfile = async (request, response, next) => {
	let context = await contextInit('Perfil');

	const proyectos = await profile.fetchProyectos(email_usuario);
	context.proyectosAsignados = proyectos[0][0]['count(P.id_proyecto)'];
	
	const proyectosNatgas = await profile.fetchTodosProyectos(email_usuario);
	context.proyectosNatgas = proyectosNatgas[0][0]['count(P.id_proyecto)'];
	
	response.render('profile', context);
};
