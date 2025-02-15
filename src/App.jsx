import React, { useState } from "react";
import Cards from "./assets/components/Cards";
import Confetti from "react-confetti";

function App() {
  const raw = [
    { name: "John", profession: "Painter", image: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Faltu", profession: "Sutar", image: "https://plus.unsplash.com/premium_photo-1690397038570-7ec0cacb37f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Bulla", profession: "Carpenter", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Rohan", profession: "Builder", image: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false }
  ];

  const [data, setData] = useState(raw);
  const [notification, setNotification] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = (changingIndex) => {
    setData((prev) =>
      prev.map((item, index) => {
        if (index === changingIndex) {
          if (!item.friends) {
            setNotification(`${item.name} added as a friend! 🎉`);
            setShowConfetti(true);

            // Remove notification & confetti after 5 sec
            setTimeout(() => {
              setNotification("");
              setShowConfetti(false);
            }, 5000);
          }
          return { ...item, friends: !item.friends };
        }
        return item;
      })
    );
  };

  return (
    <>
      {/* Confetti Celebration */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} />}

      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center relative">
        {data.map((item, index) => (
          <Cards key={index} index={index} handleClick={handleClick} values={item} />
        ))}

        {/* Notification Popup */}
        {notification && (
          <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-all animate-fadeInOut">
            {notification}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
