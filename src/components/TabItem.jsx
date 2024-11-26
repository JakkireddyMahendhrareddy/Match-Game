import React from "react";

const TabItem = ({ tabDetails, isActive, onClick }) => {
  const { tabId, displayText } = tabDetails;
  const activeClass = isActive ? "bg-blue-500 text-white" : "bg-gray-300";

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${activeClass} focus:outline-none`}
    >
      {displayText}
    </button>
  );
};

export default TabItem;
