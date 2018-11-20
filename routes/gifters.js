const router = require("express").Router();
const gifterController = require("../controllers/gifterController");

router.route("/")
    .get(gifterController.findAll)
    .post(gifterController.create);

router.route("/:id")
    .get(gifterController.findById)
    .put(gifterController.update)
    .delete(gifterController.remove);

module.exports = router;
