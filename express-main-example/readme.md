# Sequelize + Express

This is an example of how to setup Sequelize and Express together in a project for NodeJS 10 and above.

Feel free to download this and use as a starting point for your new project!

This example uses SQLite as a database engine, since it works directly with the filesystem and does not require extra configuration. Feel free to use another database engine - you just have to change the connection URL in the `Sequelize` constructor. [Learn more in the Sequelize docs](https://sequelize.org).

## See it in action

* Install dependencies with `npm install` or `yarn install`
* Run the express server with `npm start`
* Open your browser in `localhost:8000` and try the example REST endpoints:
	* `localhost:8000/api/users` (GET)
	* `localhost:8000/api/users/1` (GET)
	* `localhost:8000/api/users` (POST)
		* Body format: `{ username: 'john' }`
	* `localhost:8000/api/users/1` (PUT)
		* Body format: `{ username: 'john' }`
	* `localhost:8000/api/users/1` (DELETE)

## Exercise: new model and new controller

Try to create a new model `item.model.js` and a new express route controller `items.js` to handle:

* `GET` and `CREATE` in `/api/items`
* `GET`, `PUT` and `DELETE` in `/api/items/:id`

## What about the front-end?

This example focuses only on how you will integrate Sequelize with Express in your backend. The choice of a front-end technology stack is left to you!

## License

MIT
