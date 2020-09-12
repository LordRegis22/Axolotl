const express = require('express')
const path = require('path')

const userController = require('../controllers/userControllers.js')

const router = express.Router()

// create user
router.post('/', userController.createUser, (req, res)=>{res.status(200).send('successfully created user')})

// login user
router.get('/', userController.loginUser, (req, res)=>{res.status(200).send('successfully login user')})

// logout user 
router.get('/', userController.logoutUser, (req, res)=>{res.status(200).send('successfully logout user')})

module.exports = router
