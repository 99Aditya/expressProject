const mongoose =require("mongoose");

const subCatSchema = mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    name: String,
});

const SubCategory = mongoose.model('SubCategory', subCatSchema);
module.exports = SubCategory;