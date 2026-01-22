import { Wallet, Globe, FileText, ShoppingCart } from "lucide-react";

const iconMap = {
  wallet: Wallet,
  globe: Globe,
  fileText: FileText,
  shoppingCart: ShoppingCart,
};

const StatCard = ({ title, value, change, icon }) => {
  const Icon = iconMap[icon];
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between min-w-[240px]">
      <div>
        <p className="text-xs font-semibold text-gray-400 tracking-wider mb-1">
          {title}
        </p>
        <div className="flex items-center gap-1">
          <h3 className="text-lg font-bold text-gray-700">{value}</h3>
          <span
            className={`text-sm font-bold ${isPositive ? "text-green-400" : "text-red-400"}`}
          >
            {change}
          </span>
        </div>
      </div>

      <div className="w-10 h-10 bg-teal-400 rounded-xl flex items-center justify-center shadow-sm">
        <Icon className="text-white" size={20} />
      </div>
    </div>
  );
};

export default StatCard;
