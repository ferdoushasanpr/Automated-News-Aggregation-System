const router = require("express").Router();
const articleController = require("../controllers/articleController");

router.get("/:id", articleController.getArticleById);
router.get("/", articleController.getArticles);

module.exports = router;
