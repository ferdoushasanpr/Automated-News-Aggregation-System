const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  article_id: {
    type: String,
    unique: true,
    required: true,
  },

  title: { type: String },
  link: { type: String },
  description: { type: String },
  content: { type: String },
  keywords: [{ type: String }],

  creator: [{ type: String }],
  language: { type: String },
  country: [{ type: String }],
  category: [{ type: String }],
  datatype: { type: String },

  pubDate: { type: Date },
  pubDateTZ: { type: String },
  fetched_at: { type: Date },

  image_url: { type: String },
  video_url: { type: String, default: null },

  source_id: { type: String },
  source_name: { type: String },
  source_priority: { type: Number },
  source_url: { type: String },
  source_icon: { type: String },

  duplicate: { type: Boolean, default: false },
});

ArticleSchema.index({ pubDate: -1 });
ArticleSchema.index({ category: 1 });
ArticleSchema.index({ language: 1 });

module.exports = mongoose.model("article", ArticleSchema);
