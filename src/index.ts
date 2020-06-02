import express from "express";
import mysql from 'mysql';

const port = 8000;
const host = '0.0.0.0';
const app = express();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: 'root',
  password: 'password',
  database: 'sandbox'
})

app.get('/', (req: express.Request, res: express.Response) => {
  connection.query('select 1 + 1 as solution', (err, rows, fields) => {
    if (err) throw err;

    console.log('the solution is', rows[0].solution)

    res.send(`hello world ${rows[0].solution}`);
  });
});

app.listen(port, host, () => {
  console.log(`app is running http://${host}:${port.toString()}`)
});

