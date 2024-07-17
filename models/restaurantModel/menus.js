const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }],
    qty: Number,
});
const menus= mongoose.model('menus', menuSchema);
module.exports = menus;