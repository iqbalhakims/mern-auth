const express = require('express'); // Changed '-' to '='
const router = express.Router(); // Initialize the router
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router; // Changed 'module.export' to 'module.exports'
