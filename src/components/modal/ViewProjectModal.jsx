import { X, Users } from "lucide-react";

const ViewProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 p-4">
        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-sm mb-6">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pb-4">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {project.name}
              </h2>
              <p className="text-teal-500 font-semibold text-sm">
                Architects design houses
              </p>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl">
              <Users size={16} className="text-gray-400" />
              <span className="text-sm font-bold text-gray-700">
                {project.members} Members
              </span>
            </div>
          </div>

          <div className="border-t border-gray-50 pt-6">
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Description
            </h4>
            <p className="text-gray-500 leading-relaxed text-[14px]">
              {project.description}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
              Team Working
            </h4>
            <div className="flex -space-x-3">
              {[...Array(project.members)].map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${project.id}${i}`}
                  className="w-10 h-10 rounded-full border-[3px] border-white object-cover shadow-sm"
                  alt="team"
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-teal-500 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-teal-600 transition-all shadow-lg shadow-teal-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectModal;
