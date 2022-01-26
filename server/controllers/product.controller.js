const Product = require("../models/product.model")

module.exports.index = (req, res) => {
    res.json({
        message: "Hello"
    });
}

// Retrieve all products
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            // { products: allProducts }
            res.json({ products: allProducts })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Retrieve one products
module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => {
            res.json({ product: product })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Create a new product
module.exports.createProduct = (req, res) => {
    // create an instance of Product and then passes in the attributes required to create the Product from the req.body
    // req.body comes from a form
    // create is a method
    Product.create(req.body)
        // will only execute upon successfully inserting data in the database
        .then(newProduct =>
            res.json({ result: newProduct })
        )
        // will execute only if there is an error.
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// // create reminder 2 (alternative)
// module.exports.createProduct2 = (req, res) => {
//     const newProduct = new Product(req.body) // instantiates a Product according to model (locally, not in dbs)
//     newProduct.save()
//         .then(newProduct => res.json({ result: newProduct }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }))

// }

// Retrieve one products
module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json({ product: product }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Update a product
module.exports.updateProduct = (req, res) => {
    // can also use findByIdAndUpdate()
    console.log(req.params)
    Product.findOneAndUpdate(
        // need 3 things to update: id, req.body (what you are updating), validator
        { _id: req.params.id },
        req.body,
        // for validation
        { new: true, runValidators: true })
        .then(product => res.json({ product: product }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


// Delete a product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
