// Step import .....
const express = require('express')
const router = express.Router()
// import controller
const { listMember,updateMember,removeMember } = require('../controllers/member')
// import middleware
const {auth} =  require("../middlewares/auth")
// @ENDPOINT http://localhost:500/api/member
// @ACCESS Private

router.get('/member',listMember)
router.patch('/member/:memberId',auth,updateMember)
router.delete('/member/:memberId',auth,removeMember)


// Step 2 Export..
module.exports = router