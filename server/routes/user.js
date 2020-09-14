const express = require('express');
const path = require('path');

const userController = require('../controllers/userControllers.js');
const cookieController = require('../controllers/cookieControllers.js');
const sessionController = require('../controllers/sessionControllers.js');

const router = express.Router();

// CREATE USER
router.post(
  '/',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.status(200).json(res.locals.id);
  }
);

// LOGIN USER
router.get(
  '/',
  userController.loginUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.status(200).send('successfully login user');
  }
);

// LOGOUT USER - may not use?
router.get('/', userController.logoutUser, (req, res) => {
  res.status(200).send('successfully logout user');
});

module.exports = router;
