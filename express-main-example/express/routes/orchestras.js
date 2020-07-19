const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
	const orchestras = 'includeInstruments' in req.query ?
		await models.orchestra.findAll({ include: models.instrument }) :
		await models.orchestra.findAll();
	res.status(200).json(orchestras);
};

async function getById(req, res) {
	const id = getIdParam(req);
	const orchestra = 'includeInstruments' in req.query ?
		await models.orchestra.findByPk(id, { include: models.instrument }) :
		await models.orchestra.findByPk(id);
	if (orchestra) {
		res.status(200).json(orchestra);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.orchestra.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.orchestra.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.orchestra.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
};
