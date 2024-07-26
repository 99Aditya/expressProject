const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const userModels = require('../models/userModel');
const userDetail = require('../models/userDetail');
const path = require('path');
const jwt = require('jsonwebtoken');


const { log } = require('console');
const getUsers = async(req, res) => {
    try {
        const users = await userDetail.find({"age":497}).populate('user_id');
        // const users = await userModels.find();

        res.json(users); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const addUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);

        return res.status(400).json({ errors: errorMessages });
    }
    const { id, name, contactNo, address,email ,password} = req.body;

    try {    
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = new userModels({
            id:id,
            name:name,
            contactNo: contactNo,
            address: address,
            email: email,
            password: hashedPassword,
        })
        const saveUser =await userData.save();
       
        // const profile = new userDetail({
        //     user_id:saveUser._id,
        //     age:age,
        //     permanatAddress: permanatAddress,
        //     city: city,
        //     state: state
        // })

        res.status(200).send("User successfully registered");
    } catch (error) {
        res.status(500).send(error.message);   
    }
}

const updateUser = async (req, res) => {
    const { id, name, contactNo, address } = req.body;
    
    try {    
        const userData = new userModels({
            _id: id,
            name:name,
            contactNo: contactNo,
            address: address,
        })
        const saveUser =await userModels.updateOne({_id:id}, {$set:userData});
        res.send("Successfully updated user");
        console.log(saveUser);
    } catch (error) {
        res.status(500).send(error.message);   
    }
}

const login = async (req, res) => {
    const {email,password} = req.body;
    try {
        const JWT_SECRET = '874f980bddb9f13c8603219885945c62b3ec0c0788376a60db27e9370934ff8e50706b003fde5787fafc0a2473e073be0ff9e2769c846667f6b4d958bace9124';
        const data = await userModels.findOne({email:email});
        var passwordIsValid = bcrypt.compareSync(password,data.password);
        if(!passwordIsValid){
            res.status(500).send("password is invalid");
        }else{
            const token = jwt.sign({ userId: data._id }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).send({ message: "Login successful", token });            
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}


const imageUpload = async (req, res) => {
    try {
        const user = await userModels.findOne({ _id: req.body.id });
        if (!user) {
            return res.status(404).send('User not found.');
        }
        if (!req.files) {
            return res.status(400).send('No image uploaded.');
        }
        user.imageUrl= req.files.profileImage[0].filename;
        user.passportPhoto = req.files.passportPhoto[0].filename;


        await user.save();
        res.status(200).send('User profile updated with image.');
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const editUser =async (req,res) =>{
    try {
        const{id} = req.body;
        const user = await userModels.findOne({_id:id});
        const baseUrl = req.protocol + '://' + req.get('host');
        const imageUrl = baseUrl + '/uploads/img/' + user.imageUrl;
        const passportPhoto = baseUrl + '/uploads/photo/' + user.passportPhoto;


        const responseObject = {
            _id: user._id,
            name: user.name,
            // Include other user fields as needed
            profileImage: imageUrl,
            passportPhoto: passportPhoto,

        };
        res.status(200).send(responseObject);

    }catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports= {getUsers,addUser,updateUser,login,imageUpload,editUser};