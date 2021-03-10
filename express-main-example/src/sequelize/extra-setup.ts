import { Sequelize } from "sequelize/types";

export function applyExtraSetup(sequelize: Sequelize) {
	const { instrument, orchestra } = sequelize.models;

	orchestra.hasMany(instrument);
	instrument.belongsTo(orchestra);
}
