const sequelize = require('../sequelize');

async function reset() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.');

	await sequelize.sync({ force: true });

	await sequelize.models.user.bulkCreate([
		{ username: 'jack-sparrow' },
		{ username: 'white-beard' },
		{ username: 'black-beard' },
		{ username: 'brown-beard' },
	]);

	console.log('Done!');
}

reset();
