import { socialLinks } from "../../data/mockData";

const ProfileInformation = ({ info, user }) => {
  console.log("User in ProfileInformation:", user);
  const profileFields = [
    { label: "Full Name", value: user.name },
    { label: "Mobile", value: user.mobile },
    { label: "Email", value: user.email },
    { label: "Location", value: info.location },
  ];

  const links = socialLinks(info.socialMedia);

  return (
    <div className="bg-white rounded-3xl p-6 h-full shadow-sm border border-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[18px] font-bold text-gray-800">
          {info.title || ""}
        </h3>
      </div>

      <p className="text-[14px] text-gray-500 mb-4 pb-4 leading-relaxed font-normal border-b border-gray-100">
        {`Hi, I'm ${info.fullName} Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).`}
      </p>

      <div className="space-y-5">
        {profileFields.map((field, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-[14px] font-bold text-gray-700 min-w-[110px]">
              {field.label}:
            </span>
            <span className="text-[14px] text-gray-500">
              {field.value || "N/A"}
            </span>
          </div>
        ))}

        <div className="flex items-center gap-4">
          <span className="text-[14px] font-bold text-gray-700 min-w-[110px]">
            Social Media:
          </span>
          <div className="flex items-center gap-2">
            {links.map((social) => (
              <span
                key={social.id}
                href="#"
                className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  social.active
                    ? `hover:bg-gray-50`
                    : "opacity-30 grayscale pointer-events-none"
                }`}
                style={{ color: social.active ? social.color : "#cbd5e1" }}
              >
                <social.Icon
                  size={18}
                  fill={
                    social.active && social.id !== "instagram"
                      ? "currentColor"
                      : "none"
                  }
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
