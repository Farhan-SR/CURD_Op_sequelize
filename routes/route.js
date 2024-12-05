const express = require(
    'express'
);
const { createUser, getUsers, getUsersById, updateUser, deleteUser } = require('../controller/userContoler');


const router = express.Router();

// create a new user 
router.post('/add', createUser);

// get all users 
router.get('/getallusers', getUsers) ;


// get a user by id 
router.get('/getuser/:id', getUsersById);

// update a user by id 
router.put('/update/:id', updateUser);

// delelet user 
router.delete('/deletuser/:id', deleteUser)



module.exports = { 
    router
}

















