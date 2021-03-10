import { DataTypes, ModelDefined, Optional } from "sequelize";
import sequelize from "../connection";

interface InstrumentAttributes {
	id: number;
	type: string;
	purchaseDate: Date;

	// We need to specify the 'orchestraId' field here,
	// because it will automatically be defined later on
	// when Sequelize applies the associations
	orchestraId: number;
}

// we can make the 'id' field optional, since we aren't required
// to set it manually when creating a new entry
interface InstrumentCreationAttributes
	extends Optional<InstrumentAttributes, "id"> {}

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
