import React from "react";

export default function Item({ data, tabId, changeTab, isActive }) {
  const tabClick = () => {
    changeTab(tabId); // Change the tab when clicked
  };

  return (
    <div className="mb-2 sm:mb-0">
      <button
        className={`p-4 ${
          isActive
            ? "text-blue-700 border-b-2 border-blue-500"
            : "text-green-700"
        }`} // Apply active class
        onClick={tabClick}
      >
        {data.displayText}
      </button>
    </div>
  );
}
