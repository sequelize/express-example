import { DataTypes, ModelDefined } from "sequelize";
import sequelize from "../connection";

interface InstrumentAttributes {
	id: number;
	type: string;
	purchaseDate: Date;
	orchestraId: number;
}

interface InstrumentCreationAttributes
	extends Omit<InstrumentAttributes, "id"> {}

export const Instrument: ModelDefined<
	InstrumentAttributes,
	InstrumentCreationAttributes
> = sequelize.define("instrument", {
	// The following specification of the 'id' attribute could be omitted
	// since it is the default.
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	type: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	// type: {
	// 	allowNull: false,
	// 	type: DataTypes.STRING,
	// 	validate: {
	// 		isIn: [['string', 'wind', 'percussion']]
	// 	}
	// },
	purchaseDate: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	// We also want it to have a 'orchestraId' field, but we don't have to define it here.
	// It will be defined automatically when Sequelize applies the associations.
});
