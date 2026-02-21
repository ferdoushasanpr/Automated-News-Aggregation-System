import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {article.image_url ? (
          <img
            src={article.image_url}
            alt={article.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image Available
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-1">
          {article.category?.map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-600 rounded-md"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
          <img
            src={article.source_icon}
            alt=""
            className="w-4 h-4 rounded-full"
          />
          <span>{article.source_name}</span>
        </div>

        <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 line-clamp-2">
          {article.title}
        </h3>

        <p className="mb-4 text-sm text-gray-600 line-clamp-3">
          {article.description || "No description available for this article."}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-medium">
              By
            </span>
            <span className="text-xs font-semibold text-gray-700 truncate max-w-[120px]">
              {article.creator?.join(", ") || "Anonymous"}
            </span>
          </div>
          <Link
            to={`/article/${article.article_id}`}
            className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </div>
  );
}
