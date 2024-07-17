const Menus = require('../../models/restaurantModel/menus');

const menuAdd = async (req,res) =>{
    try {
        const{name,price,category_id,subcategory_id,qty} = req.body;
        const data = new Menus({name,price,category_id,subcategory_id,qty});
        const insert = await data.save();        
        if(insert){
            res.status(200).send("menus added successfully");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
}
const menuList = async (req, res) =>{
    try {
        const data = await Menus.find().populate('category').populate('subcategories');
        if(data){
            res.status(200).send(data);
        }        
    } catch (error) {
        res.status(404).send(error.message);
    }
}
module.exports = {menuAdd,menuList}