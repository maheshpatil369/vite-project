import React from 'react'
import Cards from './assets/components/Cards'

function App()  {
     const data = [
      { name: "Joohn", profession: "Painter", image:"https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      { name: "Faltu", profession: "Sutar", image:"https://plus.unsplash.com/premium_photo-1690397038570-7ec0cacb37f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      { name: "chutiya", profession: "Paint", image:"https://plus.unsplash.com/premium_photo-1689564003745-946f35267ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      { name: "Bulla", profession: "Carpeneter", image:"https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      { name: "Rohan", profession: "Builder", image:"https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
     ]


  return (
    <>
       <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
       {data.map((item, index) => (
  <Cards key={index} image={item.image} name={item.name} profession={item.profession} />
))}

       </div>
    </>
   

  
  );
}
export default App