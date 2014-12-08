# express-example

This repository demonstrates the usage of sequelize within an express application.
The implemented logic is a simple task tracking tool.

## Starting the app

```
npm install
npm start
```

This will start the application and create an sqlite database in your app dir.

## The setup

In order to understand how this application has been built, you can find the
executed steps in the following snippet. You should be able to adjust those
steps according to your needs. Please note that the view and the routes aren't
described. You can find those files in the repo.

```bash
mkdir express-example
cd express-example
npm install express-generator
node_modules/.bin/express -f
npm install
npm install --save sequelize@2.0.0-rc1 sequelize-cli sqlite3
node_modules/.bin/sequelize init
node_modules/.bin/sequelize model:create --name User --attributes username:string
node_modules/.bin/sequelize model:create --name Task --attributes title:string
```

You will now have a basic express application with some additional directories
(config, models, migrations). Also you will find two migrations and models.
One for the User and one for the Task.

In order to associate the models with each other, you need to change the models
like this:

```js
// task.js
// ...
classMethods: {
  associate: function(models) {
    Task.belongsTo(models.User);
  }
}
// ...
```

```js
// user.js
// ...
classMethods: {
  associate: function(models) {
    User.hasMany(models.Task)
  }
}
// ...
```

If you want to use the automatic table creation that sequelize provides,
you have to adjust the `bin/www` file to this:

```js
#!/usr/bin/env node

var debug = require('debug')('express-example');
var app = require('../app');
var models = require("../models");

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
  });
});
```

And finally you have to adjust the `config/config.json` to fit your environment.
Once thats done, your database configuration is ready!
