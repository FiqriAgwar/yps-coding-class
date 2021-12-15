const express = require('express');

const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized: false
    }
});

client.connect();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json(
        {
            message: "Welcome to server side of YPS SHS science program student marks. (Just for example)"
        }
    );
});

app.get('/hasil', (req, res) => {
    client.query(`SELECT m.*
    FROM public.marks m`, (err, ret) => {
        if (err) throw err;

        res.status(200).json(ret.rows);
    });
});

app.get('/kelas/:kelas', (req, res) => {
    const {kelas} = req.params;

    client.query(`SELECT *
    FROM public.marks m
    WHERE LOWER(m.kelas) = LOWER(${kelas})`, (err, ret) => {
        if (err) throw err;

        res.status(200).json(ret.rows);
    });
});

app.get('/siswa/:nama', (req, res) => {
    const {nama} = req.params;

    client.query(`SELECT *
    FROM public.marks m
    WHERE LOWER(m.nama) = LOWER(${nama})`, (err, ret) => {
        if (err) throw err;

        res.status(200).json(ret.rows);
    });
});

app.get('/nisn/:nisn', (req, res) => {
    const {nisn} = req.params;

    client.query(`SELECT *
    FROM public.marks m
    WHERE LOWER(m.nisn) = LOWER(${nisn})`, (err, ret) => {
        if (err) throw err;

        res.status(200).json(ret.rows);
    });
});

app.get('/nis/:nis', (req, res) => {
    const {nis} = req.params;

    client.query(`SELECT *
    FROM public.marks m
    WHERE LOWER(m.nis) = LOWER(${nis})`, (err, ret) => {
        if (err) throw err;

        res.status(200).json(ret.rows);
    });
});

app.post('/init', (req, res) => {
    const sub = req.body;

    const nisn = sub.nisn;
    const nis = sub.nis;
    const nama = sub.nama;
    const kelas = sub.kelas;

    var math = Math.floor(Math.random() * 51) + 50;
    var fisika = Math.floor(Math.random() * 51) + 50;
    var biologi = Math.floor(Math.random() * 51) + 50;
    var kimia = Math.floor(Math.random() * 51) + 50;
    var bindo = Math.floor(Math.random() * 51) + 50;
    var english = Math.floor(Math.random() * 51) + 50;
    var sejarah = Math.floor(Math.random() * 51) + 50;
    var pkn = Math.floor(Math.random() * 51) + 50;
    var olahraga = Math.floor(Math.random() * 51) + 50;
    var senbud = Math.floor(Math.random() * 51) + 50;
    var agama = Math.floor(Math.random() * 51) + 50;
    
    client.query(
        `INSERT INTO public.marks(nisn, nis, nama, kelas, math, fisika, biologi, kimia, bindo, english, sejarah, pkn, olahraga, senbud, agama)
    VALUES('${nisn}', ${nis}', ${nama}', '${kelas}', '${math}', '${fisika}', ${biologi}, ${kimia}, ${bindo}, ${english}, ${sejarah}, ${pkn}, ${olahraga}, ${senbud}, ${agama})`
    , (err, ret) => {
        if(err) throw err;

        console.log(ret);

        res.status(200).json({
            message : "Submission has been recorded"
        });
    })
});

module.exports = app;
