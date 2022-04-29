import sequelize from "../sequelize";
import { Instrument } from "../sequelize/models/instrument.model";
import { Orchestra } from "../sequelize/models/orchestra.model";
import { User } from "../sequelize/models/user.model";
import { pickRandom, randomDate } from "./helpers/random";

async function reset() {
	console.log(
		"Will rewrite the SQLite example database, adding some dummy data."
	);

	await sequelize.sync({ force: true });

	await User.bulkCreate([
		{ username: "jack-sparrow" },
		{ username: "white-beard" },
		{ username: "black-beard" },
		{ username: "brown-beard" },
	]);

	await Orchestra.bulkCreate([
		{ name: "Jalisco Philharmonic" },
		{ name: "Symphony No. 4" },
		{ name: "Symphony No. 8" },
	]);

	// Let's create random instruments for each orchestra
	for (const orchestra of await Orchestra.findAll()) {
		for (let i = 0; i < 10; i++) {
			const type = pickRandom([
				"violin",
				"trombone",
				"flute",
				"harp",
				"trumpet",
				"piano",
				"guitar",
				"pipe organ",
			]);

			await Instrument.create({
				type,
				purchaseDate: randomDate(),
				orchestraId: orchestra.get().id,
			});
		}
	}

	console.log("Done!");
}

reset();
