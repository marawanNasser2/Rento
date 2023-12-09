const paymentsService = require('../services/payments');



module.exports.getPayments = async (req, res) => {
  try {
    const payments = await paymentsService.findAllPayments();
    res.send({ payments });
  } catch (err) {
    res.status(500);
    res.send({
      error: err,
    });
  }
};


module.exports.postPayment = async(req, res)=>{
  try{
      const car = await propertyService.findCarsbyPlate(req.params.carPlate);
      const carInfo = {
          username: "amr_ibrahim1",
          carPlate: "ق س ن 1578",
          Amount: 4999,
          //paymentDate: ,
          PaymentMethod: "Cash",
          transactionID: "P1",
          //status: "",
      };
      console.log(property);
  }catch(err){
      return res.status(500).send({
          error: err.message
      });
  }

  const price =await propertyService.findPropertybyID(req.params.ID);
  console.log(price);
  try{
      console.log(propertyInfo);
      const createdPayment = await Purchase.MakeNewPayment(propertyInfo);
      return res.status(201).send({
          msg: 'Payment added successfully',
          paymentID: createdPayment._id
      });
      
  }catch(err){
      return res.status(500).send({
          error: err.message
      });
  }
};