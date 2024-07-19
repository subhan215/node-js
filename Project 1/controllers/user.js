const User = require('../models/user')
async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);

}
async function handleGetUserById(req , res) {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User Not Found!" });
    }
    return res.json(user);
}
async function handleUpdateUserById(req , res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });
    return res.json({ status: "success" });
}
async function handleDeleteUserById(req , res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}
async function handleCreateUser(req , res) {
    const body = req.body;
    if (
      !body ||
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.jobTitle ||
      !body.gender
    ) {
      return res.status(400).json({ msg: "All fields are required!" });
    }
    const result = await User.create({
      ...req.body,
    });
    console.log(result);
    return res.status(201).json({ msg: "success" });
}


module.exports = {
    handleGetAllUsers , 
    handleGetUserById , 
    handleUpdateUserById , 
    handleDeleteUserById , 
    handleCreateUser
}