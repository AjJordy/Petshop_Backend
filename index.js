const { User, cliente } = require('./app/models');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.post('/register', async (req, res) => {
    const cliente = await cliente.create(req.body);
    res.json(cliente);
});

app.get('/find/:id', (req, res) => {
    res.json('Im in register');
});

app.get('/findall', (req, res) => {
    res.json('Im in Find All');
});

app.put('/update/:id', (req, res) => {
    res.json('Im in update');
});

app.delete('/delete/:id', (req, res) => {
    res.json('Im in delete');
});

app.listen(3000);