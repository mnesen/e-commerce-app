import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mnesen45',
    database: 'ecommerce'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    app.listen(port, () => {
        console.log('Server Started...');
    });
});

// Routes ------------------------------------------------------------------------------------------------------------

app.get('/product/:id', (req, res) => {

    db.query("SELECT * FROM products WHERE productID = ?", [req.params.id], (err, result) => {
        if (err) {
            res.send({ error: err });
        }
        if (result.length > 0) {
            res.send(result);
        }
    })
});

app.get('/all-products', (req, res) => {

    db.query("SELECT productID, name, price, imgURL FROM products", (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send('No products');
        }
    })
});

app.get('/random-products', (req, res) => {
    db.query("SELECT * FROM products ORDER BY RAND() LIMIT 8", (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send('No products');
        }
    });
});