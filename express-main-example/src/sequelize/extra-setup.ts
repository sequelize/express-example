import { Instrument } from "./models/instrument.model";
import { Orchestra } from "./models/orchestra.model";

export function applyExtraSetup() {
	Orchestra.hasMany(Instrument);
	Instrument.belongsTo(Orchestra);
}
