const { validate } = require('joi');
const { userSchema } = require('../middileware/userValidate');
const { json } = require('sequelize');
const { UserModel } = require('../model/userModel');


const createUser = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body)
        if (error) return res.status(400), json(error.details[0].message)

        const user = await UserModel.create(req.body)
        return res.status(201).json(user)

    } catch (error) {
        res.status(500), json({ error: error.message })
    }

};


const getUsers = async (req, res) => {

    try {
        const users = await UserModel.findAll();
        return res.status(200).json(users)

    } catch (error) {
        res.status(500), json({ error: error.message })
    }

};

const getUsersById = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        return res.status(200).json(user)

    } catch (error) {
        res.status(500), json({ error: error.message })
    }


};

const updateUser = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body)
        if (error) return res.status(400), json(error.details[0].message)


        const user = await UserModel.findByPk(req.params.id);
        if (!user) return res.status(500).json({ error: "user not found" });

        await user.update(req.body);
        return res.status(200).json(" user upadted")

    } catch (error) {
        res.status(500), json({ error: error.message })
    }
};

const deleteUser = async (req, res) => {

    try {



        const user = await UserModel.findByPk(req.params.id);
        if (!user) return res.status(500).json({ error: "user not found" });


        await user.destroy();
        return res.status(200).json(" user deleted")

    } catch (error) {
        res.status(500), json({ error: error.message })
    }


 
};


module.exports = { createUser, getUsers, getUsersById, updateUser, deleteUser }












