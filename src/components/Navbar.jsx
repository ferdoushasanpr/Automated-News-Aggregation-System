const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            News<span className="text-blue-600">App</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
