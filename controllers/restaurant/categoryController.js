const Category = require('../../models/restaurantModel/category');
const SubCategory = require('../../models/restaurantModel/subCategory');
const cateAdd = async(req,res)=>{
    try {
        const {name} = req.body;
        const data = new Category({name: name});
        const insert = await data.save();
        if(insert){
            res.send("data saved successfully");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const subcatAdd = async(req,res)=>{
    try {
        const { category_id, name } = req.body;
        const subcategory = new SubCategory({ category: category_id, name });
        await subcategory.save();

        // Update the category with the new subcategory
        await Category.findByIdAndUpdate(category_id, { $push: { subcategories: subcategory._id } });


            res.send("subcategory data saved successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const categoryList = async(req,res)=>{
    try {
        const{category_id} = req.body;

        const data = await Category.find().populate('subcategories');

        if(data){
            res.status(200).send(data)
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {cateAdd,subcatAdd,categoryList};