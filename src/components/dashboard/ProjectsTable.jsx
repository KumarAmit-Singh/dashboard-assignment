import { Check, MoreVertical } from "lucide-react";
import { tableHeaders } from "../../data/mockData";

const ProjectsTable = ({ projects }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-700">{projects.title}</h3>
          <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
            <Check size={14} className="text-teal-400 stroke-[4px]" />
            <span className="font-bold text-gray-500">
              {projects.summaryValue}
            </span>{" "}
            {projects.summaryText}
          </p>
        </div>
        <button className="text-gray-300 hover:text-gray-600 transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              {tableHeaders.map((header) => (
                <th
                  key={header.id}
                  className={`pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider ${header.className}`}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 shadow-sm">
            {projects.list.map((project) => (
              <tr key={project.id} className="group">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                      {project.logo ? (
                        <img
                          src={project.logo}
                          alt={project.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                          <span className="text-gray-600 text-xs font-bold uppercase">
                            {project.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-bold text-gray-700 whitespace-nowrap">
                      {project.name}
                    </span>
                  </div>
                </td>

                <td className="py-4 px-4">
                  <div className="flex -space-x-2">
                    {[...Array(project.members)].map((_, i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/150?u=${project.id}${i+1}`}
                        className="w-5 h-5 rounded-full border border-white hover:z-10 transition-transform hover:scale-110 cursor-pointer"
                        alt="member"
                      />
                    ))}
                  </div>
                </td>

                <td className="py-4 px-4">
                  <span className="text-sm font-bold text-gray-600">
                    {project.budget || "0"}
                  </span>
                </td>

                <td className="py-4 min-w-[100px]">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-teal-400">
                      {project.completion}%
                    </span>
                    <div className="w-full bg-gray-100 h-1 rounded-full">
                      <div
                        className="bg-teal-400 h-1 rounded-full"
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
