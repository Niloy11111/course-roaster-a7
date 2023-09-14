
import { useState } from 'react'
import './App.css'
import Card from './Components/Cards/Card'

import { useEffect } from 'react';
import Cart from './Components/Carts/Cart';

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setCards(data))
  } ,[])


  return (
    <div className='px-16 py-14 bg-[#F3F3F3]'>

      <h1 className='text-3xl mb-12 text-center text-[#1C1B1B] font-bold'>Course Registration</h1>

      <div className='flex'>

       <div className='card-hobe-akhane grid grid-cols-3 gap-6'>
       {
          cards.map(item => <Card item={item}></Card> )
        }
       </div>

        <div className='akane cart'>
          <Cart></Cart>
        </div>

       
      </div>






    </div>
  )
}

export default App
