import React, { useState } from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("John Doe");
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center rounded-3xl">
      <motion.div
        className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={profileImage || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <label
          htmlFor="profileImage"
          className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
        >
          Change
        </label>
        <input
          type="file"
          id="profileImage"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </motion.div>

      <div className="mt-4 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium">
            Username
          </label>
          <input
            id="username"
            value={username}
            onChange={handleUsernameChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border rounded-md"
          />
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Change Password
          </label>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full px-3 py-2 border rounded-md mt-2"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-3 py-2 border rounded-md mt-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border rounded-md mt-2"
          />
          <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
