'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [showDesc1, setShowDesc1] = useState(false)
  const [showDesc2, setShowDesc2] = useState(false)
  const [showDesc3, setShowDesc3] = useState(false)
  const [showDesc4, setShowDesc4] = useState(false)
  
  function handleShowDesc1 () {
    setShowDesc1(!showDesc1)
  }
  function handleShowDesc2 () {
    setShowDesc2(!showDesc2)
  }
  function handleShowDesc3 () {
    setShowDesc3(!showDesc3)
  }
  function handleShowDesc4 () {
    setShowDesc4(!showDesc4)
  }
  return (
    <main className="flex flex-row justify-center items-center h-screen w-screen bg-gray-800">
      
      <div className="bg-yellow-500 w-3/6 h-3/6 rounded text-center ">
        <div className="h-1/6 flex justify-center items-center font-bold text-4xl">
         <h1> Dúvidas Frequentes </h1>
        </div>
        <div className="flex items-center justify-center h-5/6 bg-gray-600 px-4 gap-10 ">
        <Image src="/searchimage.png" width={200} height={200} alt="search" className=""/>
        <div className="flex flex-col bg-gray-400 gap-4 px-2 py-2 rounded-b-lg ">
          <div className="border-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.  <button onClick={handleShowDesc1}>⬇️</button></div>
          {showDesc1 ? <h1>vamos ver</h1> : <></>}
          <div className="border-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<button onClick={handleShowDesc2}>⬇️</button></div>
          {showDesc2 ? <h1>vamos ver</h1> : <></>}
          <div className="border-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <button onClick={handleShowDesc3}>⬇️</button></div>
          {showDesc3 ? <h1>vamos ver</h1> : <></>}
          <div className="border-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <button onClick={handleShowDesc4}>⬇️</button></div>
          {showDesc4 ? <h1>vamos ver</h1> : <></>}
      </div>
      </div>
      
      </div>
    </main>
  );
}
