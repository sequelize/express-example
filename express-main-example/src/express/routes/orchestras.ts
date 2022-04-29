import { Request, Response } from "express";
import { Instrument } from "../../sequelize/models/instrument.model";
import { Orchestra } from "../../sequelize/models/orchestra.model";
import { getIdParam } from "../helpers";

export async function getAll(req: Request, res: Response) {
	const orchestras =
		"includeInstruments" in req.query
			? await Orchestra.findAll({ include: Instrument })
			: await Orchestra.findAll();
	res.status(200).json(orchestras);
}

export async function getById(req: Request, res: Response) {
	const id = getIdParam(req);
	const orchestra =
		"includeInstruments" in req.query
			? await Orchestra.findByPk(id, { include: Instrument })
			: await Orchestra.findByPk(id);
	if (orchestra) {
		res.status(200).json(orchestra);
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
		await Orchestra.create(req.body);
		res.status(201).end();
	}
}

export async function update(req: Request, res: Response) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await Orchestra.update(req.body, {
			where: {
				id,
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
	await Orchestra.destroy({
		where: {
			id,
		},
	});
	res.status(200).end();
}
