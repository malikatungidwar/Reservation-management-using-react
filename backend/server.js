import app from "./app.js";
app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})

// 
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost/inventory', { useNewUrlParser: true, useUnifiedTopology: true });

// const productSchema = new mongoose.Schema({
//     name: String,
//     stock: Number,
//     price: Number,
//     category: String,
// });

// const Product = mongoose.model('Product', productSchema);

// // Get all products
// app.get('/products', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Add a new product
// app.post('/products', async (req, res) => {
//     const newProduct = new Product(req.body);
//     try {
//         await newProduct.save();
//         res.json(newProduct);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// app.listen(5000, () => {
//     console.log('Server running on port 5000');
// });
