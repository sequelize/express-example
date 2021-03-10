import { DataTypes, ModelDefined } from "sequelize";
import sequelize from "../connection";

interface OrchestraAttributes {
	id: number;
	name: string;
}

// we can omit the 'id' field, since we aren't required
// to set it manually when creating a new entry
interface OrchestraCreationAttributes extends Omit<OrchestraAttributes, "id"> {}

export const Orchestra: ModelDefined<
	OrchestraAttributes,
	OrchestraCreationAttributes
> = sequelize.define("orchestra", {
	// The following specification of the 'id' attribute could be omitted
	// since it is the default.
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
});
