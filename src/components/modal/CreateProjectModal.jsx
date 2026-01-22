import { useState, useRef, useEffect } from "react";
import { X, Image as ImageIcon, Link, Upload, AlertCircle } from "lucide-react";

const CreateProjectModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [uploadType, setUploadType] = useState("url");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", description: "", image: "" });
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Project title is required";
    }
    if (!formData.description.trim()) {
      tempErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      tempErrors.description = "Description must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ name: "", description: "", image: "" });
      setErrors({});
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-6 border-b shrink-0">
          <h3 className="text-xl font-bold text-gray-800">New Project</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar"
        >
          <div className="relative h-60 w-full bg-gray-50 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 flex flex-col items-center justify-center group shrink-0">
            {formData.image ? (
              <>
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, image: "" })}
                  className="absolute top-3 right-3 bg-red-500 text-white p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={16} />
                </button>
              </>
            ) : (
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 bg-white rounded-[50%] flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <ImageIcon size={32} className="text-teal-400" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest">
                  Upload Cover Photo
                </p>
                <p className="text-[12px] mt-1 text-gray-300 italic">
                  Recommended ratio 16:9
                </p>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="flex bg-gray-100 p-1.5 rounded-xl">
              <button
                type="button"
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${uploadType === "url" ? "bg-white shadow-sm text-teal-600" : "text-gray-500"}`}
                onClick={() => setUploadType("url")}
              >
                <Link size={14} /> IMAGE URL
              </button>
              <button
                type="button"
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${uploadType === "upload" ? "bg-white shadow-sm text-teal-600" : "text-gray-500"}`}
                onClick={() => setUploadType("upload")}
              >
                <Upload size={14} /> FILE UPLOAD
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">
                Source
              </label>
              {uploadType === "url" ? (
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all"
                  placeholder="https://example.com/image.jpg"
                  value={
                    formData.image.startsWith("data:") ? "" : formData.image
                  }
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="w-full py-3 px-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:bg-gray-100 flex items-center justify-between transition-all"
                >
                  <span className="truncate">
                    {formData.image.startsWith("data:")
                      ? "File ready ✅"
                      : "Click to select file"}
                  </span>
                  <Upload size={18} className="text-teal-500" />
                </button>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">
                Title
              </label>
              <input
                type="text"
                className={`w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 ${errors.name ? "ring-2 ring-red-400" : "focus:ring-teal-500"} outline-none text-sm font-medium`}
                placeholder="eg. Scandinavian Kitchen"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 ml-1">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase ml-1">
                Description
              </label>
              <textarea
                rows="4"
                className={`w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 ${errors.description ? "ring-2 ring-red-400" : "focus:ring-teal-500"} outline-none text-sm resize-none`}
                placeholder="What's the story behind this project?"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              {errors.description && (
                <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 ml-1">
                  <AlertCircle size={12} /> {errors.description}
                </p>
              )}
            </div>
          </div>
        </form>

        <div className="p-6 border-t bg-gray-50/50 shrink-0">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 text-gray-500 font-bold text-xs hover:bg-gray-50 rounded-2xl border border-gray-100 transition-colors uppercase tracking-wider"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex-1 py-3 bg-teal-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-teal-600 shadow-lg transition-all active:scale-[0.98]"
            >
              Save Project
            </button>
          </div>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CreateProjectModal;
