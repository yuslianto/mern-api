const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// CREATE => post
router.post('/product', productsController.createProduct);

// READ => get
router.get('/products', productsController.getAllProducts);

/*
router.put('/products', (req, res, next) => {
    res.json({name: "Yuslianto", email: "yuslianto@gmail.com"});
    next();
});

router.delete('/products', (req, res, next) => {
    res.json({name: "Yuslianto", email: "yuslianto@gmail.com"});
    next();
});
*/

module.exports = router;