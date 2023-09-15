
import { useState } from 'react'
import './App.css'
import Card from './Components/Cards/Card'

import { useEffect } from 'react';
import Cart from './Components/Carts/Cart';

function App() {

  const [cards, setCards] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  
  
  
  useEffect(() => {
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setCards(data))
  } ,[])

  const handleClickButton = (item) => {
    const isExist = selectedCourse.find((course) => course.id === item.id )
    if(isExist){
      alert('ar add kora jabena')
    }
    else{
      const newSelectedCourse = [...selectedCourse, item] ;
      setSelectedCourse(newSelectedCourse);

      selectedCourse.forEach(each =>
         console.log(each.credit_hour)  )
    }
     
  }
  

  return (
    <div className='px-16 py-14 bg-[#F3F3F3]'>

      <h1 className='text-3xl mb-12 text-center text-[#1C1B1B] font-bold'>Course Registration</h1>

      <div className='flex gap-6'>

       <div className='card-hobe-akhane grid grid-cols-3 gap-6'>
       {
          cards.map(item => <Card 
            handleClickButton={handleClickButton}
            item={item}></Card> )
        }
       </div>

        <div className='akane cart'>
          <Cart selectedCourse={selectedCourse}></Cart>
        </div>

       
      </div>






    </div>
  )
}

export default App
