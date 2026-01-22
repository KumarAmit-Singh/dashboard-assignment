import { useState } from "react";

const PlatformSettings = ({ settings: initialSettings }) => {
  const [settings, setSettings] = useState(initialSettings);

  const toggleSetting = (categoryId, settingId) => {
    const updatedList = settings.list.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          settings: category.settings.map((setting) =>
            setting.id === settingId
              ? { ...setting, enabled: !setting.enabled }
              : setting,
          ),
        };
      }
      return category;
    });

    const targetCategory = updatedList.find((c) => c.id === categoryId);
    const targetItem = targetCategory?.settings.find((s) => s.id === settingId);

    if (targetItem) {
      const statusText = targetItem.enabled ? "Enabled" : "Disabled";
      alert(`${targetItem.label}: ${statusText}`);
    }

    setSettings({
      ...settings,
      list: updatedList,
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 h-full shadow-sm border border-gray-50">
      <h3 className="text-[18px] font-bold text-gray-800 mb-7">
        {settings.title || "Platform Settings"}
      </h3>

      <div className="space-y-8">
        {settings.list.map((category) => (
          <div key={category.id}>
            <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-5">
              {category.category || ""}
            </p>

            <div className="space-y-4">
              {category.settings.map((setting) => (
                <div
                  key={setting.id}
                  className="flex items-center gap-3 group cursor-pointer"
                  onClick={() => toggleSetting(category.id, setting.id)}
                >
                  <div className="relative">
                    <button
                      className={`relative w-10 h-5 rounded-full transition-all duration-300 ease-in-out ${
                        setting.enabled ? "bg-teal-400" : "bg-gray-200"
                      }`}
                      type="button"
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
                          setting.enabled ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  <label className="text-sm text-gray-500 cursor-pointer font-normal leading-tight group-hover:text-gray-700 transition-colors">
                    {setting.label || ""}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformSettings;
