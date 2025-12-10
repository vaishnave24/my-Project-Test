const { getUser } = require("../controller/user.controller");


const router = require("express").Router();

router.get("/get/user",getUser);
// router.post("post/saveUser");
// router.put("/put/updateUser");
// router.delete("/delete/user")



module.exports = router;