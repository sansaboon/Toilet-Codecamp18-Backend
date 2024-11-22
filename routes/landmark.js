// Step 1 import
const express = require("express")
const router = express.Router()
const { createLandmark, listLandmark,removeLandmark,updateLandmark, allLandmark } = require("../controllers/landmark")
const { auth } = require("../middlewares/auth")

router.post("/landmark",auth,createLandmark)
router.get("/landmark",auth,listLandmark)
router.get("/allLandmark",allLandmark)
router.patch("/landmark/:landmarkId",auth,updateLandmark)
router.delete("/landmark/:landmarkId",auth,removeLandmark)


// Step 2 Export.....
module.exports = router


