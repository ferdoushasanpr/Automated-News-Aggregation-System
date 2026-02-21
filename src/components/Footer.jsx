export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mb-4">
              News<span className="text-blue-600">App</span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Automated industry news aggregator providing real-time updates
              across technology, business, and global trends.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 font-medium">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Health
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 font-medium">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              Newsletter
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Get the latest headlines delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-50 border border-gray-200 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-blue-700 transition">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 justify-center items-center mx-auto text-center">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} NewsSync Inc. All rights reserved. Data
            provided by NewsData.io.
          </p>
        </div>
      </div>
    </footer>
  );
}
