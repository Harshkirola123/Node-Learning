const Student = require('../models/user');

async function handleCreateNewUser(req,res){
    const body = req.body;
    const student = await Student.create({
        name: body.name,
        age: body.age,
        grade: body.grade,
        subjects: body.subjects
    })
     return res.status(201).json({status:"success"});
}

async function handleGetAllUser(req,res) {
    const allStudent = await Student.find({});
    return res.json(`${allStudent}`);
}
async function handleGetUserById(req,res) {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send('The student with the given ID was not found.');
    return res.json(student);
}

module.exports = {
    handleCreateNewUser,
    handleGetAllUser,
    handleGetUserById,
 };