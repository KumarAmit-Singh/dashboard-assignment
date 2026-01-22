import PlatformSettings from "../components/profile/PlatformSettings";
import ProfileInformation from "../components/profile/ProfileInformation";
import Conversations from "../components/profile/Conversations";
import ProfileProjects from "../components/profile/ProfileProjects";
import { useState } from "react";
import {
  profileSettings,
  profileInfo,
  conversations,
  profileProjects,
  teamsData,
  userData,
} from "../data/mockData";
import { Box, Pencil, Users, Wrench } from "lucide-react";
import Teams from "../components/profile/Teams";
import EditProfileModal from "../components/modal/EditProfileModal";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(userData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleUpdateProfile = (updatedData) => {
    setUser(updatedData);
  }

  const tabs = [
    { id: "overview", label: "OVERVIEW", icon: Box },
    { id: "teams", label: "TEAMS", icon: Users },
    { id: "projects", label: "PROJECTS", icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] no-scrollbar pb-10">
      <div className="relative">
        <div
          className="h-[300px] relative overflow-hidden rounded-3xl mt-4 mx-auto max-w-[96%] shadow-lg"
          style={{ backgroundColor: user.themeColor }}
        >
          <div className="absolute inset-0 opacity-40 hover:opacity-50 transition-opacity duration-500" />
        </div>

        <div className="max-w-[98%] mx-auto px-8">
          <div className="relative -mt-16 z-20 bg-white/70 backdrop-blur-sm rounded-[20px] p-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                  />
                  <button
                    onClick={() => setIsEditModalOpen(true)} 
                    className="absolute bottom-[-5px] right-[-5px] bg-white p-1.5 rounded-lg shadow-md border border-gray-100 hover:scale-110 transition-transform">
                    <Pencil size={12} className="text-teal-400" />
                  </button>
                </div>
                <div>
                  <h1 className="text-[18px] font-bold text-gray-800">
                    {user.name}
                  </h1>
                  <p className="text-[14px] text-gray-500 font-medium">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-100/30 p-1 rounded-2xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-bold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white shadow-md text-gray-800"
                        : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                    }`}
                  >
                    <tab.icon size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 mt-8">
        {activeTab === "overview" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-50 overflow-hidden">
                <PlatformSettings settings={profileSettings} />
              </div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-50 overflow-hidden">
                <ProfileInformation info={profileInfo} user={user} />
              </div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-50 overflow-hidden">
                <Conversations conversations={conversations} />
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <ProfileProjects projects={profileProjects} />
            </div>
          </div>
        )}

        {activeTab === "teams" && <Teams teamsData={teamsData} />}

        {activeTab === "projects" && (
          <div className="animate-in slide-in-from-bottom-4 duration-300">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <ProfileProjects projects={profileProjects} />
            </div>
          </div>
        )}
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        userData={user}
        onSave={handleUpdateProfile}
      />
    </div>
  );
};

export default Profile;
