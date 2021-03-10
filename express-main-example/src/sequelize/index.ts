import { Sequelize } from "sequelize";
import { applyExtraSetup } from "./extra-setup";

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "sqlite-example-database/example-db.sqlite",
	logQueryParameters: true,
	benchmark: true,
});

const modelDefiners = [
	require("./models/user.model"),
	require("./models/instrument.model"),
	require("./models/orchestra.model"),
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
export default sequelize;
