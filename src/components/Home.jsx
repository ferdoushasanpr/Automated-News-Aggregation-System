import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import MainComponent from "./MainComponent";
import Sidebar from "./Sidebar";

export default function Home() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    category: "",
    language: "",
    startDate: "",
    endDate: "",
  });

  const fetchNews = async (pageNum, currentFilters, isNewSearch = false) => {
    setLoading(true);
    try {
      const { category, language, startDate, endDate } = currentFilters;
      const url = `http://localhost:3000/api/news?page=${pageNum}&limit=12&category=${category}&language=${language}&startDate=${startDate}&endDate=${endDate}`;

      const res = await axios.get(url);

      if (isNewSearch) {
        setNews(res.data.data);
      } else {
        setNews((prev) => [...prev, ...res.data.data]);
      }

      setTotalPages(res.data.pagination.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);
    setPage(1);
    fetchNews(1, newFilters, true);
  };

  useEffect(() => {
    fetchNews(1, filters, true);
  }, []);

  return (
    <MainComponent>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        <Sidebar filters={filters} handleFilterChange={handleFilterChange} />

        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </div>

          {page < totalPages && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => {
                  setPage((p) => p + 1);
                  fetchNews(page + 1, filters);
                }}
                className="bg-blue-600 text-white px-8 py-2 rounded-full font-bold hover:bg-blue-700 transition"
              >
                {loading ? "Loading..." : "Show More"}
              </button>
            </div>
          )}
        </main>
      </div>
    </MainComponent>
  );
}
