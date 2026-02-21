import React from "react";

export default function Sidebar({ filters, handleFilterChange }) {
  return (
    <aside className="w-full md:w-64 bg-white p-6 border-r border-gray-200 sticky top-0 h-fit md:h-screen">
      <h2 className="text-lg font-bold mb-6">Filters</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
            Category
          </label>
          <select
            name="category"
            onChange={handleFilterChange}
            className="w-full p-2 border rounded-md text-sm"
          >
            <option value="">All Categories</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
            Language
          </label>
          <select
            name="language"
            onChange={handleFilterChange}
            className="w-full p-2 border rounded-md text-sm"
          >
            <option value="">All Languages</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
            From Date
          </label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded-md text-sm mb-3"
          />

          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
            To Date
          </label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded-md text-sm"
          />
        </div>
      </div>
    </aside>
  );
}
