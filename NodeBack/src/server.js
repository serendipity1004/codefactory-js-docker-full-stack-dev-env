const express = require('express');
const app = express();
const port = 3000;
const {Pool} = require('pg');
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: 'postgres',
});

app.get('/', async (req, res) => {
    const resp = await pool.query('SELECT * FROM test');

    res.json({
        count:resp.rows.length,
    });
});

app.post('/', async (req, res) => {
    await pool.query('INSERT INTO test values(default)');

    const resp = await pool.query('SELECT * FROM test');

    console.log(resp);

    res.json({
        count:resp.rows.length,
    });
});

app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})
