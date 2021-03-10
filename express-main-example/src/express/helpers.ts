import { Request } from "express";

// A helper function to assert the request ID param is valid
// and convert it to a number (since it comes as a string by default)
export function getIdParam(req: Request) {
	const id = req.params.id;
	if (/^\d+$/.test(id)) {
		return Number.parseInt(id, 10);
	}
	throw new TypeError(`Invalid ':id' param: "${id}"`);
}
