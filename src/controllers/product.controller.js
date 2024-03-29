const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Recebe id pelo req.params => qualquer paramentro pelo id
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByd(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Created
//Recebe dados pelo req.body => qualquer paramentro pelo id
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update => recebe id do product e o conteudo para substituir oque for necessario

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdUpdate(id, req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// deleteProduct
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      res.status(400).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted succesfully" });
  } catch (error) {}
};

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
