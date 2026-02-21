import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainComponent from "./MainComponent";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/news/${id}`)
      .then((result) => {
        setArticle(result.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="p-10 text-center">Loading Article...</div>;
  if (!article)
    return <div className="p-10 text-center">Article not found.</div>;

  return (
    <MainComponent>
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              ← Back to Feed
            </button>
          </div>
        </nav>

        <article className="max-w-3xl mx-auto px-4 py-10">
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              {article.category?.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 border-y border-gray-100 py-4">
              <img
                src={article.source_icon}
                alt=""
                className="w-10 h-10 rounded-full border"
              />
              <div className="text-sm">
                <p className="font-bold text-gray-900">{article.source_name}</p>
                <p className="text-gray-500">
                  {new Date(article.pubDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  • {article.language}
                </p>
              </div>
            </div>
          </div>

          {article.image_url && (
            <figure className="mb-10">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </figure>
          )}

          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <p className="text-xl font-medium text-gray-600 mb-6 italic">
              {article.description}
            </p>

            <div className="whitespace-pre-line">
              {article.content === "ONLY AVAILABLE IN PAID PLANS" ? (
                <div className="bg-gray-50 p-8 rounded-xl border border-dashed border-gray-300 text-center">
                  <p className="text-gray-500 mb-4">
                    The full content of this article is restricted by the source
                    provider.
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                  >
                    Read full story at {article.source_name}
                  </a>
                </div>
              ) : (
                article.content
              )}
            </div>
          </div>

          {article.keywords && (
            <div className="mt-12 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
              {article.keywords.map((word) => (
                <span key={word} className="text-sm text-gray-500">
                  #{word}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </MainComponent>
  );
}
