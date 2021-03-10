import { Request, Response } from "express";
import sequelize from "../../sequelize";
import { getIdParam } from "../helpers";

const { models } = sequelize;

export async function getAll(req: Request, res: Response) {
	const instruments = await models.instrument.findAll();
	res.status(200).json(instruments);
}

export async function getById(req: Request, res: Response) {
	const id = getIdParam(req);
	const instrument = await models.instrument.findByPk(id);
	if (instrument) {
		res.status(200).json(instrument);
	} else {
		res.status(404).send("404 - Not found");
	}
}

export async function create(req: Request, res: Response) {
	if (req.body.id) {
		res
			.status(400)
			.send(
				`Bad request: ID should not be provided, since it is determined automatically by the database.`
			);
	} else {
		await models.instrument.create(req.body);
		res.status(201).end();
	}
}

export async function update(req: Request, res: Response) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.instrument.update(req.body, {
			where: {
				id: id,
			},
		});
		res.status(200).end();
	} else {
		res
			.status(400)
			.send(
				`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`
			);
	}
}

export async function remove(req: Request, res: Response) {
	const id = getIdParam(req);
	await models.instrument.destroy({
		where: {
			id: id,
		},
	});
	res.status(200).end();
}
