const slugify = require('slugify');
const Category = require("../models/categoryModel");
const { options } = require('../routers/categoryRouter');

const createCategory = async (name) => {
    const newCategory = await Category.create({
        name: name,
        slug: slugify(name),
    });
    return newCategory;
};

const getCategories = async (name) =>{

    return await Category.find({}).select('name slug').lean();
};

const getCategory = async (slug) =>{
   return await Category.find({slug}).select('name slug').lean();
};

const updateCategory = async (name, slug) =>{
  const filter = {slug};
  const updates = {$set: { name:name, slug:slugify(name)}};
  const option = { new: true,};
  const updateCategory = await Category.findOneAndUpdate(
    filter,
    updates,
    option
  );
  return updateCategory;
   
};

const deleteCategory = async (slug) =>{
  const result = await Category.findOneAndDelete({slug});
  return result;
};

module.exports = { createCategory,getCategories,getCategory, updateCategory,deleteCategory};