import React, { useEffect, useState } from "react";
import axios from "axios";

import ArticleCard from "./ArticleCard";
import MainComponent from "./MainComponent";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/news")
      .then((result) => {
        setNews(result.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <MainComponent>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
              ))}
            </div>
          )}

          {!loading && news.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No articles found in the database.
              </p>
            </div>
          )}
        </main>
      </div>
    </MainComponent>
  );
}
