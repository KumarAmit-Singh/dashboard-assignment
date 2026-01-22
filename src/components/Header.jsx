import { Search, Settings, Bell, Menu, UserRound } from "lucide-react";

const Header = ({ currentPage, setIsMobileMenuOpen }) => {
  return (
    <header className="top-1 z-30 px-4 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between rounded-[20px] px-4 pt-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-white/50 rounded-xl transition-colors"
          >
            <Menu size={18} className="text-gray-600" />
          </button>
          <div>
            <div className="flex items-center text-[12px] text-gray-400">
              <span>Pages</span>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-gray-600 font-medium capitalize">
                {currentPage}
              </span>
            </div>
            <h2 className="text-sm font-bold text-gray-800 capitalize mt-0.5">
              {currentPage}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="flex items-center bg-white border border-gray-100 rounded-xl px-3 py-2 w-full md:w-48 shadow-sm">
            <Search size={14} className="text-gray-400" />
            <input
              type="text"
              placeholder="Type here..."
              className="bg-transparent border-none outline-none ml-2 text-[12px] w-full placeholder:text-gray-400 focus:ring-0"
            />
          </div>

          <button className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-gray-800 transition-colors">
            <UserRound size={14} strokeWidth={3} />
            <span className="text-[12px] font-bold">Sign In</span>
          </button>

          <div className="flex items-center text-gray-400">
            <button className="p-2 hover:text-gray-600 transition-colors">
              <Settings size={14} strokeWidth={3} />
            </button>
            <button className="p-2 hover:text-gray-600 transition-colors">
              <Bell size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
