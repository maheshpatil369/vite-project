import React, { useState } from 'react';
import Cards from './assets/components/Cards';

function App() {
  const raw = [
    { name: "John", profession: "Painter", image: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Faltu", profession: "Sutar", image: "https://plus.unsplash.com/premium_photo-1690397038570-7ec0cacb37f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Bulla", profession: "Carpenter", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Rohan", profession: "Builder", image: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false }
  ];

  const [data, setData] = useState(raw);

  const handleClick = (changingIndex) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === changingIndex) return { ...item, friends: !item.friends };
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {data.map((item, index) => (
          <Cards key={index} index={index} handleClick={handleClick} values={item} />
        ))}
      </div>
    </>
  );
}

export default App;
