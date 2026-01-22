import { ArrowRight } from "lucide-react";

const RocketCard = ({ data }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[80%] min-h-[280px] group shadow-sm">
      <img
        src={data.image}
        className="absolute inset-0 w-full object-cover"
        alt={data.title || ""}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-white text-xl font-bold mb-2">
            {data.title || ""}
          </h3>
          <p className="text-gray-200 text-sm leading-snug">
            {data.description || ""}
          </p>
        </div>
        <button className="flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all">
          {data.buttonText || ""} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default RocketCard;
