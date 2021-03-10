import app from "./express/app";

// it is important to import sequelize at least once in the app,
// as this will create the database connection, and also create the relations
// between all models.
import sequelize from "./sequelize";

const PORT = 8080;

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log("Database connection OK!");
	} catch (error) {
		console.log("Unable to connect to the database:");
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();

	console.log(`Starting Sequelize + Express example on port ${PORT}...`);

	app.listen(PORT, () => {
		console.log(
			`Express server started on port ${PORT}. Try some routes, such as '/api/users'.`
		);
	});
}

init();
