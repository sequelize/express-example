import { DataTypes, ModelDefined, Optional } from "sequelize";
import sequelize from "../connection";

interface UserAttributes {
	id: number;
	username: string;
}

// we can make the 'id' field optional, since we aren't required
// to set it manually when creating a new entry
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export const User: ModelDefined<
	UserAttributes,
	UserCreationAttributes
> = sequelize.define("user", {
	// The following specification of the 'id' attribute could be omitted
	// since it is the default.
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	username: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
		validate: {
			// We require usernames to have length of at least 3, and
			// only use letters, numbers and underscores.
			is: /^\w{3,}$/,
		},
	},
});
