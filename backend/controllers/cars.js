const carsService = require('../services/cars');



module.exports.getCars = async (req, res) => {
  try {
    const cars = await carsService.findAllCars();
    res.send({ cars });
  } catch (err) {
    res.status(500);
    res.send({
      error: err,
    });
  }
};



module.exports.postCars = async (req, res) => {
   const info = {
    //carID : req.body.carID,
    carID : "001",
    carPlate: "ق س ن 1478",
    Model: "HS",
    Brand: "MG",
    Year: "2021",
    carType: "SUV",
    carImages: "https://www.mgcars.com/images/mg-models/newmghsphev/color/Black.png"
    //Availability: true
  };

  try{
    const createdCar = await carsService.addNewCar(info);
    return res.status(201).send ({
        msg:'Car created successfully',
        carID: createdCar.carID
    });
} catch(err) {
   return res.status(500).send({
    error: err.message
   });
}
};


module.exports.findMyCars = async (req, res) => {
  try{
      const myCars = await carsService.findMyCars(req.params.username);
      return res.status(201).send({ myCars });
  }catch (err) {
      return res.status(500).send({error: err.message});
    }
};


module.exports.deleteCar = async (req,res) => {
  const carPlate = req.params.carPlate;
  try{
  const delCar = await carsService.removeCar(carPlate);
  res.send({
    delCar,
      msg: 'Car deleted successfully.'
  });}
  catch (err) {
      return res.status(500).send({
          error: err.message
      });
  }
};



module.exports.EditCar = async(req, res) => {
  try{
      const editCar = await carsService.findCarsbyPlate(req.params.carPlate)
      const edits = {
        Year: "2020",
        carType: "SUV",
        Availability: false
      }
      const editCars = await carsService.EditCarst(editCar,edits)
      res.send({
          msg: 'Car details updated successfully'
      })
  }catch(err){
      return res.status(500).send({
          error:err.message
      });
  }
};


