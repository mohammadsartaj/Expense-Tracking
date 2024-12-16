import React, { useState } from "react";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    groupExpenses: true,
    friendRequests: true,
    payments: true,
    weeklyReports: false,
  });

  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);

  const currencyOptions = ["USD", "EUR", "GBP", "INR", "JPY", "AUD"];
  const languageOptions = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Hindi",
  ];

  const handleNotificationToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className={`min-h-screen rounded-3xl p-6 ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-r from-blue-100 to-purple-100 text-black"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          App Settings
        </h1>

        {/* Notification Settings */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-xl rounded-lg p-6 mb-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Notification Preferences
          </h2>
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center mb-4">
              <span className="capitalize font-medium">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleNotificationToggle(key)}
                  className="sr-only peer"
                />
                <div
                  className={`w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-300 after:border-gray-500 
                  after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                  ${value ? "peer-checked:bg-purple-600" : ""}`}
                ></div>
              </label>
            </div>
          ))}
        </div>

        {/* Currency and Language Settings */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-xl rounded-lg p-6 mb-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Regional Settings</h2>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md"
            >
              {currencyOptions.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md"
            >
              {languageOptions.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-xl rounded-lg p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">App Preferences</h2>
          <div className="flex justify-between items-center mb-4">
            <span>Dark Mode</span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />
              <div
                className={`w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-300 after:border-gray-500 
                after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                ${darkMode ? "peer-checked:bg-purple-600" : ""}`}
              ></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span>Privacy Mode</span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacyMode}
                onChange={() => setPrivacyMode(!privacyMode)}
                className="sr-only peer"
              />
              <div
                className={`w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-300 after:border-gray-500 
                after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                ${privacyMode ? "peer-checked:bg-purple-600" : ""}`}
              ></div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            className="w-full py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:from-blue-600 hover:to-purple-700 transition-colors"
            onClick={() => {
              console.log("Settings saved:", {
                notifications,
                currency,
                language,
                darkMode,
                privacyMode,
              });
            }}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
