import { useState, useRef, useEffect } from "react";
import {
  X,
  Camera,
  User,
  Mail,
  Phone,
  Briefcase,
  AlertCircle,
} from "lucide-react";

const EditProfileModal = ({ isOpen, onClose, userData, onSave }) => {
  const [formData, setFormData] = useState({ ...userData });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setFormData({ ...userData });
      setErrors({});
    }
  }, [isOpen, userData]);

  if (!isOpen) return null;

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-lg font-bold text-gray-800">Edit Profile</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="flex flex-col items-center mb-4">
            <div className="relative group">
              <img
                src={formData.avatar}
                className="w-24 h-24 rounded-2xl object-cover border-4 border-gray-50 shadow-md"
                alt="Profile Preview"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Camera className="text-white" size={24} />
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <p className="text-[11px] font-bold text-gray-400 mt-2 uppercase tracking-wider">
              Change Photo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase mb-1.5 ml-1">
                <User size={12} /> Full Name
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2.5 bg-gray-50 border ${errors.name ? "border-red-400" : "border-gray-100"} rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all`}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1 ml-1 font-medium italic">
                  <AlertCircle size={10} /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase mb-1.5 ml-1">
                <Briefcase size={12} /> Position
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all"
                value={formData.position || ""}
                placeholder="CEO / Founder"
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
              />
            </div>

            <div className="md:col-span-1">
              <label className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase mb-1.5 ml-1">
                <Mail size={12} /> Email
              </label>
              <input
                type="email"
                className={`w-full px-4 py-2.5 bg-gray-50 border ${errors.email ? "border-red-400" : "border-gray-100"} rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1 ml-1 font-medium italic">
                  <AlertCircle size={10} /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase mb-1.5 ml-1">
                <Phone size={12} /> Mobile
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all"
                value={formData.mobile || ""}
                placeholder="+91 12345 67890"
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 text-gray-500 font-bold text-xs hover:bg-gray-50 rounded-2xl border border-gray-100 transition-colors"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-teal-400 text-white font-bold text-xs rounded-2xl hover:bg-teal-500 shadow-lg shadow-teal-100 transition-all active:scale-95"
            >
              SAVE CHANGES
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
