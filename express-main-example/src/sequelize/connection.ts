import { Sequelize } from "sequelize";

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "sqlite-example-database/example-db.sqlite",
	logQueryParameters: true,
	benchmark: true,
});

export default sequelize;
