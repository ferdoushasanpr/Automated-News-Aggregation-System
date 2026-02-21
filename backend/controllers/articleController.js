const axios = require("axios");
const articleModel = require("../models/article");

module.exports.syncNewsData = async () => {
  try {
    const news = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${process.env.NEWSDATA_API_KEY}`,
    );

    const articles = news.data.results;

    if (articles && articles.length > 0) {
      const operations = articles.map((art) => ({
        updateOne: {
          filter: { article_id: art.article_id },
          update: { $set: art },
          upsert: true,
        },
      }));

      const result = await articleModel.bulkWrite(operations);
      console.log(
        `Cron Sync: ${result.upsertedCount} new items, ${result.modifiedCount} updated.`,
      );
    }
  } catch (error) {
    console.error("Cron Job Error:", error.message);
  }
};

module.exports.getArticles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const articles = await articleModel
      .find()
      .sort({ pubDate: -1 })
      .skip(skip)
      .limit(limit);

    const totalArticles = await articleModel.countDocuments();
    const totalPages = Math.ceil(totalArticles / limit);

    res.status(200).json({
      message: "Articles retrieved successfully",
      pagination: {
        totalResults: totalArticles,
        totalPages: totalPages,
        currentPage: page,
        limit: limit,
      },
      data: articles,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error retrieving articles",
      error: error.message,
    });
  }
};

module.exports.getArticleById = async (req, res) => {
  try {
    const article = await articleModel.findOne({ article_id: req.params.id });
    if (article) {
      res
        .status(200)
        .json({ message: "Article retrieved successfully", data: article });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error retrieving article", error: error.message });
  }
};
