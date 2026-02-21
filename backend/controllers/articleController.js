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
    const {
      page = 1,
      limit = 12,
      category,
      language,
      country,
      startDate,
      endDate,
    } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    let filter = {};
    if (category) filter.category = { $in: [category] };
    if (language) filter.language = language;
    if (country) filter.country = { $in: [country] };
    if (startDate && endDate) {
      filter.pubDate = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const articles = await articleModel
      .find(filter)
      .sort({ pubDate: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await articleModel.countDocuments(filter);

    res.status(200).json({
      pagination: { totalPages: Math.ceil(total / limit), currentPage: page },
      data: articles,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
