const User = require('../models/user');

async function handleGetAllUsers(req,res){
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}
async function handleGetUserById(req,res){
    const user = users.find(user => user.id == req.params.id);
    if (user) {
        return res.send(user);
    }
    res.status(404).send({ error: 'User not found' });
}


async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName: ""});
    return res.json({status : "Success"})
}
async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "Success"});
}
async function handleCreateNewUser(req,res){
    const body = req.body;
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender,
    })
    console.log(result); 
    return res.status(201).json({ status: 'Data received'});
}



module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}