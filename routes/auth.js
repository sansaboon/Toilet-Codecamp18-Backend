// Step 1 import ......
const express = require("express")
const router = express.Router()
const {register, login,currentUser} = require('../controllers/auth')

const{registerValidator,loginValidator} = require("../middlewares/validator")
const {auth} = require('../middlewares/auth')




// @ENDPOINT http://localhost:5000/api/register
// @ACCESS Public
router.post('/register',registerValidator,register)
router.post('/login',loginValidator,login)


router.post("/current-user",auth,currentUser)

// Step 2 Export module
module.exports =router