import React from "react";

export default function Images({ imgData, id, imageChange }) {
  return (
    <div className="p-4">
      <button onClick={() => imageChange(id)} type="button">
        <img
          className="h-20 w-20 rounded-sm shadow-lg sm:h-24 sm:w-24 md:h-28 md:w-28"
          src={imgData.thumbnailUrl}
          alt={imgData.thumbnailUrl}
        />
      </button>
    </div>
  );
}
