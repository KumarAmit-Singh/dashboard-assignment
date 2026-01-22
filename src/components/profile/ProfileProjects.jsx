import { useState } from "react";
import { Plus } from "lucide-react";
import CreateProjectModal from "../modal/CreateProjectModal";
import ViewProjectModal from "../modal/ViewProjectModal";

const ProfileProjects = ({ projects: initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewAll = (project) => {
    setSelectedProject(project); 
  };

  const addNewProject = (newProjectData) => {
    const newProject = {
      ...newProjectData,
      id: projects.length + 1,
      members: 1,
    };
    setProjects([...projects, newProject]);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="bg-white rounded-3xl p-8">
      <div className="mb-10">
        <h3 className="text-[18px] font-bold text-gray-800 mb-1">Projects</h3>
        <p className="text-[14px] text-gray-400 font-medium">
          Architects design houses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden mb-4 shadow-md aspect-video">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>

            <div className="space-y-1 mb-6">
              <span className="text-[12px] text-gray-400 font-medium">
                Project #{index + 1}
              </span>
              <h4 className="text-[18px] font-bold text-gray-800">
                {project.name}
              </h4>
              <p className="text-[14px] text-gray-400 font-normal leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <button
                onClick={() => handleViewAll(project)}
                className="px-6 py-2 border border-teal-200 rounded-xl text-[10px] font-bold text-teal-400 hover:bg-teal-50 transition-colors tracking-widest uppercase"
              >
                VIEW ALL
              </button>

              <div className="flex -space-x-3">
                {[...Array(project.members)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${project.id}${i}`}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    alt="member"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <div
          onClick={() => setIsCreateModalOpen(true)}
          className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl aspect-auto min-h-[250px] cursor-pointer hover:shadow-md transition-all group bg-white"
        >
          <Plus
            className="text-gray-400 group-hover:text-gray-600 mb-3"
            size={24}
          />
          <p className="text-gray-500 font-bold text-[16px]">
            Create a New Project
          </p>
        </div>
      </div>

      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={addNewProject}
      />

      <ViewProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default ProfileProjects;
