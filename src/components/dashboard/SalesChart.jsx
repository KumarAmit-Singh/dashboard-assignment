import { BarChart, Bar, ResponsiveContainer, YAxis, Tooltip } from "recharts";
import { Wallet, MousePointer2, ShoppingCart, Wrench } from "lucide-react";

const IconRenderer = ({ iconName }) => {
  const iconProps = { size: 12, className: "text-white" };
  const icons = {
    wallet: <Wallet {...iconProps} />,
    mousePointer: <MousePointer2 {...iconProps} />,
    shoppingCart: <ShoppingCart {...iconProps} />,
    settings: <Wrench {...iconProps} />,
  };
  return icons[iconName] || <Wallet {...iconProps} />;
};

const SalesChart = ({ users }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-full font-sans">
      <div className="h-48 w-full mb-6 bg-gradient-to-br from-[#1a1f37] to-[#11162d] rounded-2xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={users.data || []}
            margin={{ top: 6, right: 0, left: -25, bottom: 0 }}
          >
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#cbd5e0", fontSize: 10 }}
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
            />
            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
              contentStyle={{ borderRadius: "10px", border: "none" }}
              itemStyle={{ color: "#1a1f37" }}
            />
            <Bar
              dataKey="value"
              fill="#ffffff"
              radius={[10, 10, 10, 10]}
              barSize={6}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-6 px-1">
        <h4 className="text-gray-800 font-bold text-lg">{users.title}</h4>
        <p className="text-green-500 text-sm font-bold">
          ({users.percentage}){" "}
          <span className="text-gray-400 font-normal">{users.subtext}</span>
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 px-1">
        {users.stats.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="bg-teal-400 p-1.5 rounded-md flex items-center justify-center shadow-sm">
                <IconRenderer iconName={item.icon} />
              </div>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">
                {item.label}
              </p>
            </div>
            <p className="text-gray-700 font-bold text-sm">{item.value}</p>

            <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden mt-1">
              <div
                className="bg-teal-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
