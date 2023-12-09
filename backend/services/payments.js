const paymentModel = require('../models/Payment');



module.exports.findAllPayments = async() => {
    try {
        const payments = await paymentModel.find();
        return payments;
    } catch (err) {
    
        throw new Error('Could not retrieve all payments transactions');
    }
    };


    module.exports.newPayment = async (info) =>{ 
        try{
            const Payment = new paymentModel({
                username: info.username,
                carPlate: info.carPlate,
                amount: info.amount,
                //paymentDate: ,
                paymentMethod: info.paymentMethod,
                transactionID: info.transactionID,
                status: info.status,
            });

            const createdPayment = await Payment.save();
            return createdPayment;
        }catch(err){
            throw new Error('Could not create new payment');
        }
    };