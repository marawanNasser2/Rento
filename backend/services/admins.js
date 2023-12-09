const adminModel = require('../models/Admin');
const userModel = require('../models/User');
const paymentModel = require('../models/Payment');


module.exports.findAlladmins = async() => {
    try {
        const admins = await adminModel.find();
        return admins;
    } catch (err) {
    
        throw new Error('Could not retrieve admins');
    }
};



module.exports.addNewAdmin = async (info) => {

    try{
        const admin = new adminModel({
            username: info.username,
            email: info.email,
            password: info.password,
            firstName: info.firstName,
            lastName: info.lastName,
            //createdAt: "",
        });

        const createdAdmin = await car.save();
        return createdAdmin;
    } catch (err){
        throw new Error ('Could not add User admin');
    }
};



module.exports.banUser = async (username) => {
    try{
        await userModel.deleteOne({username});
    } catch (err) {
        throw new Error ('Could not ban user');
    }
};



module.exports.viewPendingPayments = async () => {
    try{
       const pending = await paymentModel.find({ status: 'Pending'});
       return pending;
    } catch (err) {
        throw new Error ('Could not view pending payments');
    }
};