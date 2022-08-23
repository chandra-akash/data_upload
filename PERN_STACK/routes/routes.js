const router = require("express").Router();
const controller = require("../controllers/controllers");
const {validateBody,
    schemas} = require("../helper/validate");

router.get("/g", controller.getHello);
router.route("/h").post(controller.push_value_in_db);

module.exports = router;
