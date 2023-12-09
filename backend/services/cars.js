const carModel = require('../models/Car');
const userModel = require('../models/User');


module.exports.findAllCars = async() => {
    try {
        const cars = await carModel.find();
        return cars;
    } catch (err) {
    
        throw new Error('Could not retrieve cars');
    }
    };



module.exports.addNewCar = async (info) => {

    try{
        const car = new carModel({
            carID: info.carID,
            carPlate: info.carPlate,
            Model: info.Model,
            Brand: info.Brand,
            Year: info.Year,
            carType: info.carType,
            Availability: info.Availability,
            carImages: info.carImages
        });

        const createdCar = await car.save();
        return createdCar;
    } catch (err){
        throw new Error ('Could not add car');
    }
};


module.exports.findMyCars = async(username)=>{
    try{
        const myCars = await carModel.find({username:username});
        return myCars;

    }catch (err){
        throw new Error ('Could not retreive Cars');
    }
};


module.exports.removeCar = async (carPlate) => {
    try {
      await carModel.deleteOne({ carPlate });
    } catch (err) {
      throw new Error('Could not remove car.');
    }
};



module.exports.EditCar = async(car, edit)=>{
    try{
        const editted = await carModel.findOneAndUpdate(car.carPlate, edit);
        return editted;
    }catch(err){
        throw new Error('Could not update car details');
    }
}



module.exports.findCarsbyPlate = async (carPlate) => {
    try{
        const car = await carModel.find({carPlate});
        if(car){
            return car;
        }else{
            return false;
        }
    }
    catch(error){
        throw new Error ('Could not find the car')
    }
};

