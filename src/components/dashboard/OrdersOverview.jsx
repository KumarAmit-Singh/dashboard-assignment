import { Bell, ShoppingCart, CreditCard, Package } from "lucide-react";

const iconMap = {
  bell: Bell,
  shoppingCart: ShoppingCart,
  creditCard: CreditCard,
  package: Package,
};

const OrdersOverview = ({ orders }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        {orders?.title || ""}
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        <span className="text-green-500 font-semibold">
          {orders?.percentage || ""}
        </span>{" "}
        {orders?.percentageText || ""}
      </p>

      <div className="space-y-6">
        {orders?.list.map((order, index) => {
          const Icon = iconMap[order.icon];
          const isLast = index === orders.length - 1;

          return (
            <div key={order.id} className="flex gap-2">
              <div className="relative flex flex-col items-center">
                <div
                  className={`w-8 h-8 ${order.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`${order.color}`} size={16} />
                </div>
                {!isLast && (
                  <div
                    className="w-0.5 bg-gray-200 flex-1"
                    style={{ maxHeight: "20px" }}
                  />
                )}
              </div>
              <div className="flex-1 pb-0.5">
                <h4 className="font-medium text-gray-800 mb-1">
                  {order.title || ""}
                </h4>
                <p className="text-sm text-gray-500">{order.date || ""}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersOverview;
