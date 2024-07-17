const userDetailModel = require("../models/userDetail.js");

const userDetailAdd = async(req,res)=> {
    const {user_id,age,permanatAddress,city,state} = req.body;

    try {
        const userData = new userDetailModel({
            user_id:user_id,
            age:age,
            permanatAddress: permanatAddress,
            city: city,
            state: state
        })
        const saveUser =await userData.save(); 
        res.send("User detail added successfully");

    } catch (error) {
        res.status(500).send(error.message);   
    }
}

module.exports = {userDetailAdd};