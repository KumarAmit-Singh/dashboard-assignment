import { ArrowRight, Zap } from "lucide-react";

const DocumentCard = ({ document }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col md:flex-row items-center justify-between min-h-[280px]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-gray-400 text-sm font-bold mb-1">
            {document.subtitle || ""}
          </p>
          <h2 className="text-2xl font-bold text-gray-700 mb-3">
            {document.title || ""}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            {document.description || ""}
          </p>
        </div>
        <button className="flex items-center gap-2 text-gray-700 font-bold text-sm mt-28 hover:gap-3 transition-all">
          {document.buttonText || ""} <ArrowRight size={14} />
        </button>
      </div>

      <div className="w-full md:w-[45%] h-full min-h-[240px] bg-teal-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

        <div className="flex items-center gap-2 relative z-10">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Zap className="text-teal-400 fill-teal-400" size={28} />
          </div>
          <span className="text-white font-bold text-2xl tracking-tighter">
            {document.brandName || ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
