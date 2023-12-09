const usersService = require('../services/users');



module.exports.getUsers = async (req, res) => {
  try {
    const users = await usersService.findAllUsers();
    res.send({ users });
  } catch (err) {
    res.status(500);
    res.send({
      error: err,
    });
  }
};



module.exports.postUsers = async (req, res) => {
  const info = {
   //username : req.body.username,
   username: "amr_ibrahim1",
   email: "amr@gmail.com",
   password: "123456789",
   firstName: "Amr",
   lastName: "Ibrahim",
   dateOfBirth: "22-10-2002",
   gender: "Male",
   address: "Misr El-Gedida",
   phone: "01178648259",
 };

 try{
   const createdUser = await usersService.addNewUser(info);
   return res.status(201).send ({
       msg:'User created successfully',
       username: createdUser.username
   });
} catch(err) {
  return res.status(500).send({
   error: err.message
  });
}
};



module.exports.deleteUser = async (req,res) => {
  //const userId = req.params.userId;
  const username = req.params.username;
  try{
      await usersService.deleteUser(username);
      res.send({
          msg: 'User deleted successfully'
      });}
      catch (err){
          return res.status(500).send({
              error: err.message
          });
      }
};




module.exports.EditAccount = async(req, res) => {
  try{
      const editUser = await usersService.findUserbyUsername(req.params.Username)
      const edits = {
          //Username: req.body.Username,
          Password: "147258369",
          email: "amr111@gmail.com",
      }
      const EditAcc = await usersService.EditAccount(editUser,edits)
      res.send({
          msg: 'Account details updated successfully'
      })
  }catch(err){
      return res.status(500).send({
          error:err.message
      });
  }
};