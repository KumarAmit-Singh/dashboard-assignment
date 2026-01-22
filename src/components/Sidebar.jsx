import { HelpCircle } from "lucide-react";
import { sidebarMenuData } from "../data/mockData";

const SidebarItem = ({ item, currentPage, onClick }) => {
  const isAllowed = item.id === "dashboard" || item.id === "profile";
  const isActive = currentPage === item.id;

  return (
    <button
      onClick={() => onClick(item.id)}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${
        isActive
          ? "bg-white shadow-sm"
          : isAllowed
            ? "text-gray-400 hover:bg-gray-100/50"
            : "text-gray-400 cursor-not-allowed"
      }`}
    >
      <div
        className={`p-2 rounded-xl shadow-sm ${isActive ? "bg-teal-400 text-white" : "bg-white text-teal-400"}`}
      >
        <item.icon size={16} strokeWidth={isActive ? 3 : 2.5} />
      </div>
      <span
        className={`text-[12px] font-bold ${isActive ? "text-gray-700" : ""}`}
      >
        {item.label}
      </span>
    </button>
  );
};

const Sidebar = ({
  currentPage,
  onPageChange,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const handleItemClick = (id) => {
    if (id === "dashboard" || id === "profile") {
      onPageChange(id);
      if (window.innerWidth < 1024) setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/10 backdrop-blur-sm z-40 lg:hidden transition-opacity ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={`absolute lg:relative z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } w-[270px] flex flex-col p-4 bg-[#F8F9FA] lg:bg-transparent`}
      >
        <div className="py-8 px-1 mb-4 border-b">
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-[12px] tracking-[2px] text-gray-800 uppercase">
              Purity UI Dashboard
            </h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          <nav className="space-y-2 mb-8">
            {sidebarMenuData.mainItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                currentPage={currentPage}
                onClick={handleItemClick}
              />
            ))}
          </nav>

          <p className="text-[11px] font-bold text-gray-800 mb-4 px-4 uppercase tracking-wider">
            Account Pages
          </p>

          <nav className="space-y-2">
            {sidebarMenuData.accountItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                currentPage={currentPage}
                onClick={handleItemClick}
              />
            ))}
          </nav>

          <div className="mt-10 p-4 bg-teal-400 rounded-[20px] text-white relative overflow-hidden shadow-lg shadow-teal-100">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
              <HelpCircle className="text-teal-400" size={20} />
            </div>
            <h3 className="font-bold text-sm mb-1">Need help?</h3>
            <p className="text-[11px] text-teal-50 mb-4">
              Please check our docs
            </p>
            <button className="w-full bg-white text-gray-800 py-2.5 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-teal-50 transition-colors">
              Documentation
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
