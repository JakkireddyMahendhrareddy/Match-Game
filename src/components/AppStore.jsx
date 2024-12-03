import React, { useState } from "react";
import AppItem from "./AppItem";
import Navbar from "./Navbar";
import ResultCard from "./ResultCard";

const AppStore = ({ emojisList }) => {
  const [b, setList] = useState(emojisList);
  const [c, setAppId] = useState(0);
  const [e, setTop] = useState(0);

  const [d, setIdList] = useState([]); // State to track IDs
  const [show, setShow] = useState(false);

  const sortList = (id) => {
    const idNotInList = d.every((itemId) => itemId !== id);

    if (idNotInList) {
      setIdList((prevList) => [...prevList, id]);

      const shuffledList = [...emojisList].sort(() => Math.random() - 0.5);
      setList(shuffledList);

      setAppId((prevAppId) => prevAppId + 1);
    } else {
      setShow(!show);
    }
  };

  const retryChange = () => {
    setShow(!show);
    setAppId(0);
    if (c > e) {
      setTop(c);
    }
    setIdList([]);
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-gray-100 pb-5">
      <Navbar c={c} e={e} />
      {!show && (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-6 p-4 w-full max-w-screen-xl">
          {b.map((appItem) => (
            <AppItem
              key={appItem.id}
              appDetails={appItem}
              listChange={() => sortList(appItem.id)}
              id={appItem.id}
            />
          ))}
        </ul>
      )}
      {show && <ResultCard c={c} onRetry={retryChange} />}
    </div>
  );
};

export default AppStore;
