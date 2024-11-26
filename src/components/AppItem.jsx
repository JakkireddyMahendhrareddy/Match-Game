import React from "react";

const AppItem = ({ appDetails }) => {
  const { appName, imageUrl } = appDetails;

  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
      <img src={imageUrl} alt={appName} className="h-20 w-20 mb-2" />
      <p className="text-center font-medium">{appName}</p>
    </div>
  );
};

export default AppItem;
