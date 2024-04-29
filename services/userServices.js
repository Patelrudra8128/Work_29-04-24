const User = require('../models/userTbl');

const createUser = async (id,name,email) => {
    return User.create({
        id : id,
        name: name,
        email : email
    });
};

const findUser = async () => {
    return User.findAll();
}

module.exports = {
    createUser,
    findUser
}