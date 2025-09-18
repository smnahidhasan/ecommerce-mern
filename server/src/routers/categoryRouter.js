const express = require('express');
const { runValidation } = require('../validators'); // Correct
const { validateCategory } = require('../validators/category');
const { isLoggedIn, isLoggedOut, isAdmin } = require('../middlewares/auth');
const { handleCreateCategory, handleCreateCategories, handleGetCategory, handleUpdateCategory, handleDeleteCategory } = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/', handleCreateCategories);
categoryRouter.get('/:slug', handleGetCategory);
categoryRouter.delete('/:slug', isLoggedIn, isAdmin, handleDeleteCategory);

categoryRouter.post('/', ...validateCategory, runValidation, isLoggedIn, isAdmin, handleCreateCategory);
categoryRouter.put('/:slug', ...validateCategory, runValidation, isLoggedIn, isAdmin, handleUpdateCategory);

module.exports = categoryRouter;