const express = require('express');

const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
    res.json({name: "Yuslianto", email: "yuslianto@gmail.com"});
    next();
});

router.use('/price', (req, res, next) => {
    res.json({price: 300000});
    next();
});

router.delete('/customers', (req, res, next) => {
    res.json({title: "Customers"});
    next();
});

app.use('/', router);

app.listen(4000);