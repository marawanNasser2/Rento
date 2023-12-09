const userModel = require('../models/User');



module.exports.findAllUsers = async() => {
try {
    const users = await userModel.find();
    return users;
} catch (err) {

    throw new Error('Could not retrieve users');
  }
};



module.exports.addNewUser = async (info) => {

    try{
        const user = new userModel({
            username: info.username,
            email: info.email,
            password: info.password,
            firstName: info.firstName,
            lastName: info.lastName,
            dateOfBirth: info.dateOfBirth,
            gender: info.gender,
            address: info.address,
            phone: info.phone,
        });

        const createdUser = await user.save();
        return createdUser;
    } catch (err){
        throw new Error ('Could not add User');
    }
};


module.exports.deleteUser = async (username) => {
    try{
        await userModel.deleteOne({username});
    } catch (err) {
        throw new Error ('Could not ban user');
    }
};


module.exports.EditAccount = async(acc, edit)=>{
    try{
        const editted = await userModel.findOneAndUpdate(acc.username, edit);
        return editted;
    }catch(err){
        throw new Error('Could not update account');
    }
}



module.exports.findUserbyUsername = async (username) => {
    try{
        const user = await userModel.find({username});
        if(user){
            return user;
        }else{
            return false;
        }
    }
    catch(error){
        throw new Error ('Could not find the user')
    }
};