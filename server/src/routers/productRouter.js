const express = require('express');

const {uploadUserImage,uploadProductImage} = require('../middlewares/uploadFile');

const { runValidation } = require('../validators'); // Add destructuring
const { isLoggedIn, isLoggedOut, isAdmin } = require('../middlewares/auth');
const {handleCreateProducts,handleGetProducts, handleGetProduct, handledeleteProduct, handleUpdateProduct} =require('../controllers/productController');
const { validateProduct } = require('../validators/product');

const productRouter = express.Router();

// Fix: Use spread operator for validateProduct array, remove duplicate POST route, fix undefined 'upload'
productRouter.post('/',uploadProductImage.single("image"),...validateProduct, runValidation,isLoggedIn,isAdmin, handleCreateProducts);
productRouter.get('/',handleGetProducts);
productRouter.get('/:slug',handleGetProduct);
productRouter.delete('/:slug',isLoggedIn, isAdmin, handledeleteProduct);
productRouter.put('/:slug',uploadProductImage.single('image'), ...validateProduct, runValidation, isLoggedIn, isAdmin, handleUpdateProduct);

module.exports = productRouter;
