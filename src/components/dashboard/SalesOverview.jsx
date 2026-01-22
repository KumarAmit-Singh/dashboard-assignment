import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SalesOverview = ({ sales }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full">
      <div className="mb-8">
        <h4 className="text-gray-800 font-bold text-lg">{sales.title || ""}</h4>
        <p className="text-green-500 text-sm font-bold">
          {sales.growthText || ""}{" "}
          <span className="text-gray-400 font-normal">
            in {sales.year || ""}
          </span>
        </p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={sales.data || []}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="6 6"
              vertical={false}
              stroke="#e2e8f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#cbd5e0", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#cbd5e0", fontSize: 12 }}
              domain={[0, 600]}
              ticks={[0, 100, 200, 300, 400, 500, 600]}
            />
            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="Sales"
              stroke="#4fd1c5"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorSales)"
            />
            <Area
              type="monotone"
              dataKey="Previous"
              stroke="#2d3748"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPrev)"
            />
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4fd1c5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4fd1c5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2d3748" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#2d3748" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverview;
