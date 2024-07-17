const couponModel =require('../../models/restaurantModel/coupon');

const addCoupon = async(req,res) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => error.msg);

            return res.status(400).json({ errors: errorMessages });
        }
        const {name,price,type,start_date,end_date} = req.body;
        console.log('hrllo');
        const couponSaved = new couponModel({
            name: name,
            price: price,
            type: type,
            start_date: start_date,
            end_date: end_date,
        });
        const add = await couponSaved.save();
        if (add){
            res.send("data added successfully");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const allCoupons = async (req, res) => {
    try {
        const data =await couponModel.find()
        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const getCoupon = async (req, res) => {
    try {
        const {id} = req.body;
        const data =await couponModel.find({_id:id});
        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
module.exports = {addCoupon,allCoupons,getCoupon};