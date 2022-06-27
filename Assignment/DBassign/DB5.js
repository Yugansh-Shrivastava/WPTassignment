let dbparas = {
    host: 'localhost',
    user: 'yugansh',
    password: 'cdac',
    database: 'db1',
    port: 3306
};
const mysql = require('mysql2');
const con = mysql.createConnection(dbparas);

const express = require('express');
const app = express();

app.use(express.static("DBassign"));
app.get("/getBal", (req, res) => {
    let input = req.query.accno;
    console.log(input);

    let output = {
        status: false,
        itemdetails: { accno: 0, bal: "" }
    };

    con.query('select * from account where accno =?', [input], (error, rows) => {
        if (rows.length > 0) {
            output.status = true;
            output.itemdetails = rows[0];
        }
        res.send(output);
        console.log(output);

    });


});

app.listen(99, function () { });
