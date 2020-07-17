# (Work in progress, stay tuned!) Sequelize + Express

This is an example of how to setup Sequelize and Express together in a project for NodeJS 10 and above.

Feel free to download this and use as a starting point for your new project!

## See it in action

* Install dependencies with `npm install` or `yarn install`
* Run the express server with `npm start`
* Open your browser in `localhost:8000` and try the example REST endpoints:
	* `localhost:8000/api/users` (GET)
	* `localhost:8000/api/users/1` (GET)
	* `localhost:8000/api/users` (POST)
		* Body format: `{ name: 'john', age: 15 }`
	* `localhost:8000/api/users/1` (PUT)
		* Body format: `{ name: 'john', age: 15 }`
	* `localhost:8000/api/users/1` (DELETE)

## What about the front-end?

This example focuses only on how you will integrate Sequelize with Express in your backend. The choice of a front-end technology stack is left to you!
