const shiftModel = require('../../models/restaurantModel/shift.js');
const staffModel = require('../../models/restaurantModel/staff.js');
const shiftAdd = async (req,res)=>{
    try{
        const {shift_name,start_time,end_time} = req.body;

        const startDate = new Date('1970-01-01T' + start_time + 'Z');
        const endDate = new Date('1970-01-01T' + end_time + 'Z');

        const shift = new shiftModel({
            shift_name:shift_name,
            start_time: startDate, end_time: endDate
        });
        console.log(shift);
        const saveShift = await shift.save();
        if(saveShift){
            res.send("data added successfully");
        }
    }catch(err){
        res.status(500).send(err.message);
    }
}

const staffAdd = async(req, res)=>{
    try{
        const {name,staff_id,staff_role,email,phone,employee_type,shift_id,days,permission} = req.body;
        const staff= new staffModel({name,staff_id,staff_role,email,phone,employee_type,shift_id,days,permission});
        const staffSave = await staff.save();
        if(staffSave){
            res.send("staff data added successfully");
        }
    }catch(err){
        res.status(500).send(err.message);
    }
}
const staffList = async(req,res)=>{
    
    try {
       const data= await staffModel.find();
       res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const staffEdit = async(req,res)=>{
    try {
        const {id} = req.body;
        const staff= await staffModel.findOne({"_id":id});
        res.status(200).send(staff);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const staffUpdate = async(req,res)=>{
    try{
        const {id,name,staff_id,staff_role,email,phone,employee_type,shift_id,days,permission} = req.body;
        const staff= new staffModel({name,staff_id,staff_role,email,phone,employee_type,shift_id,days,permission});

        const update = staff.update({"_id":id},{$set: staff});
        if(update){
            res.send('data update successful');
        }
    }catch(error){
        res.status(500).send(error);
    }
}

const staffDelete = async(req,res)=>{
    try {
        const {id} = req.body;
        const deleteData = await staffModel.deleteOne({_id:id});
        if(deleteData){
            res.send('data delete successful');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = {shiftAdd,staffAdd,staffList,staffEdit,staffUpdate,staffDelete};