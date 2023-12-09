const adminsService = require('../services/admins');



module.exports.getAdmins = async (req, res) => {
  try {
    const admins = await adminsService.findAlladmins();
    res.send({ admins });
  } catch (err) {
    res.status(500);
    res.send({
      error: err,
    });
  }
};



module.exports.postAdmins = async (req, res) => {
  const info = {
   //username : req.body.username,
   username: "marawan_nasser22",
   email: "marawan@gmail.com",
   password: "123456789",
   firstName: "Marawan",
   lastName: "Nasser Zewail",
   //createdAt: "",
 };

 try{
   const createdAdmin = await adminsService.addNewAdmin(info);
   return res.status(201).send ({
       msg:'User admin created successfully',
       username: createdAdmin.username
   });
} catch(err) {
  return res.status(500).send({
   error: err.message
  });
}
};



module.exports.banUser = async (req,res) => {
  const username = req.params.username;
  try{
      await adminsService.banUser(username);
      //const users = await adminsService.findAllUsers();
      res.send({
          msg: 'User banned successfully.'
      });} 
      catch (err){
          return res.status(500).send({
              error: err.message
          });
      }
};



module.exports.viewPendingPayments = async (req,res) => {
  try{
  const payments = await adminsService.viewPendingPayments();
  return res.send({payments});
  } catch (err) {
  res.status(500);
  return res.send({ error: err.message});
  }
};