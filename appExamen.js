const express = require('express');
const bodyParser = require('body-parser');
const text = 'Contraseña a indicar en la memoria del examen: ';

const app = express();

let userGoal = 'Sin objetivo';

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>El objetivo del curso</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Objetivo del curso</label>
            <input type="text" name="goal">
          </div>
          <button>Guarda Objetivo</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
    const enteredGoal = req.body.goal;
    console.log(enteredGoal);
    console.log(text + 'ASIX-2021');
    userGoal = enteredGoal;
    res.redirect('/');
});

app.listen(3000);