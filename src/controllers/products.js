exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: "Create Product Success !!!",
            data: {
                id: 1,
                name: "Sari Roti Gandum",
                price: 40000
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: "Get All Products Success",
            data: {
                id: 1,
                name: "Sari Roti Gandum",
                price: 40000
            }
        }
    );
    next();
}