import React from "react";

export default function Navbar({ count, timer }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-l from-blue-400 via-purple-500 to-pink-500 w-full p-3 mb-10">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="img"
        className="h-10 w-25"
      />
      <div className="flex flex-col sm:flex-row sm:space-x-5 pr-5 mt-3 sm:mt-0">
        <div className="flex flex-row space-x-2">
          <h1 className="text-white text-xl">Score:</h1>
          <h1 className="text-yellow-300 text-xl">{count}</h1>
        </div>
        <div className="flex flex-row space-x-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="img"
            className="h-7 w-7"
          />
          <h1 className="text-yellow-300 text-xl">{timer} Sec</h1>
        </div>
      </div>
    </div>
  );
}
