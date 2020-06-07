import express from "express";
import mysql from 'mysql';

const port = 8000;
const host = '0.0.0.0';
const app = express();

const connection = mysql.createConnection({
  host: 'mysql.default.svc.cluster.local',
  user: 'root',
  password: 'password',
  database: 'sandbox'
})

app.get('/', (req: express.Request, res: express.Response) => {
  connection.query('select 1 + 1 as solution', (err, rows, fields) => {
    if (err) throw err;

    res.send(`hello world ${rows[0].solution}`);
  });
});

app.listen(port, host, () => {
  console.log(`app is running http://${host}:${port.toString()}`)
});
