import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
// function App() {
//   return (
//     <>
//       <h1 className='bg-red-600 text-white p-5 rounded-4xl'>
//         Learning react || Tailwind CSS</h1>
//     </>
//   )
// }



/* eslint-disable @next/next/no-img-element */
  function App() {
      let myobj={
        text:"Nature encompasses the entire living and non-living world, providing essential resources like air, water, and food that sustain all life on Earth",
        location:"344543"
      }
  return (
    <>
  <h1 className='bg-green-500 text-white  mb-5  rounded-xl size-20-110'> Card  </h1>
<Card name="Nature" someobj={myobj} />
<Card name="Asthetic" someobj={myobj}/>



    </>
  );
}

export default App

