const userServices = require('../services/userServices');

const addUser = async (req,res) => {
    try {
        const{id,name,email} = req.body;
        let user = await userServices.createUser(id,name,email);
        if(user){
            res.json({ message : "User added successfully", status : 1});
        }else{
            res.json({ message : "User not added", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewUser = async (req,res) => {
    try {
        let userData = await userServices.findUser();
        if(userData){
            res.json({ Data : userData, status : 1});
        }else{
            res.json({ message : "Data not found", status : 0});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addUser,
    viewUser
}