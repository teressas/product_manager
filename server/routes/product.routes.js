const ProductController = require("../controllers/product.controller");

module.exports = app => {
    console.log("server/routes")
    // app.get("/", ProductController.index);
    app.get("/api", ProductController.index);
    app.get('/api/products', ProductController.allProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.oneProduct);
    app.put("/api/products/update/:id", ProductController.updateProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
};