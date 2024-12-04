import React, { useState, useEffect } from "react";
import Item from "./Item";
import Images from "./Images";
import Navbar from "./Navbar";
import ResultCard from "./ResultCard";

export default function Todos({ tabsList, imagesList }) {
  const [timer, setTimer] = useState(49);
  const [selectedTab, setSelectedTab] = useState(tabsList[0].tabId);
  const [firstImg, setFirstImg] = useState(imagesList[0].imageUrl);
  const [firstId, setFirstId] = useState(imagesList[0].id);
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(true);
  const [state, setState] = useState(true);

  let timerId;
  useEffect(() => {
    if (state) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setChange(false);
      setState(false);
    }

    return () => clearInterval(timerId);
  }, [state, timer]);

  // Function to change the tab and filter images based on tabId
  function changeTab(tabId) {
    setSelectedTab(tabId); // Set the selected tab
  }

  // Function to handle the change of the displayed image
  function handleImageChange(id) {
    if (id === firstId) {
      setCount((prevCount) => prevCount + 1);
      setState(!state);

      const selectedImage = Math.ceil(Math.random() * imagesList.length);
      console.log(selectedImage);

      if (selectedImage >= 0) {
        setFirstImg(imagesList[selectedImage].imageUrl);
        setFirstId(imagesList[selectedImage].id);
      }
    } else {
      setChange(!change);
    }
  }

  // Function to reset the game when "Play Again" button is clicked
  function restartGame() {
    setTimer(49);
    setCount(0);
    setFirstImg(imagesList[0].imageUrl);
    setFirstId(imagesList[0].id);
    setChange(true);
    setState(true);
  }

  // Filter images based on the selected tabId
  const filteredImages = imagesList.filter(
    (item) => item.category === selectedTab
  );

  return (
    <div className="flex flex-col items-center bg-gray-200 ">
      <Navbar count={count} timer={timer} />
      {change && (
        <div className="mt-10 flex flex-col justify-center items-center">
          <img
            src={firstImg}
            alt="Selected"
            className="h-1/4 w-1/4 mb-4 md:h-1/3 md:w-1/3 lg:h-1/4 lg:w-1/4"
          />

          <ul className="flex flex-wrap justify-center items-center border-b-3 border-red-500 mb-4">
            {tabsList.map((tab) => (
              <Item
                key={tab.tabId}
                data={tab}
                tabId={tab.tabId}
                changeTab={changeTab}
                isActive={selectedTab === tab.tabId} // Pass active state
              />
            ))}
          </ul>

          {/* Render imagesList items based on the selected tab */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredImages.map((allImg) => (
              <Images
                key={allImg.id}
                imgData={allImg}
                id={allImg.id}
                imageChange={() => handleImageChange(allImg.id)}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Display result card when game ends */}
      {!change && <ResultCard count={count} onRetry={restartGame} />}
    </div>
  );
}
