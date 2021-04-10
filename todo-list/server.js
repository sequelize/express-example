
const express = require('express')
const app = express()

const db = require('./db');
  db
    .sequelize
    .sync()
    .then(async () =>  {
      console.log('Connected to db')

      const user = await db.User.create({
        email: 'jane@doe.com',
        firstName: 'Jane',
        lastName: 'Doe'
      });
      // SAVE A RECORD
      const todo = await db.Todo.create({
       title: 'Do laundry',
       content: 'Don\'t forget the socks'
      });

      user.addTodo(todo);
      user.save();
      const userTodos = await user.getTodos()

      console.log(user.toJSON());
      console.log(todo.toJSON());
      console.log(userTodos);
    })


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
