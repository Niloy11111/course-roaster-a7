import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'
import './App.css'
import Card from './Components/Cards/Card'

import { useEffect } from 'react';
import Cart from './Components/Carts/Cart';


function App() {


  const [cards, setCards] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  
  
  
  useEffect(() => {
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setCards(data))
  } ,[])

  const handleClickButton = (item) => {

    const isExist = selectedCourse.find((course) => course.id === item.id )
    let creditHour = item.credit_hour ;

    

    if(isExist){
      toast.error('Sorry ! It is already selected', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else{
      const newSelectedCourse = [...selectedCourse, item] ;
      setSelectedCourse(newSelectedCourse);

      selectedCourse.forEach(each => creditHour = creditHour + each.credit_hour )
      // const remainingCreditHour = 20 - creditHour ;

      if(creditHour <= 20){
        setCreditHour(creditHour);
        
      } 
      else{
        toast.error('Sorry ! You cannot add credit more than 20 hr ', {
          position: toast.POSITION.TOP_CENTER
      });
      }
    }
  }


  return (
    <div className='px-16 py-14 bg-[#F3F3F3]'>

      <ToastContainer />
      <h1  className='text-3xl mb-12 text-center text-[#1C1B1B] font-bold'>Course Registration</h1>

      <div className='flex gap-6'>

       <div className='card-hobe-akhane grid grid-cols-3 gap-6'>
       {
          cards.map(item => <Card 
            key={item.id}
            handleClickButton={handleClickButton}
            item={item}></Card> )
        }
       </div>

        <div className='akane cart'>
          <Cart creditHour={creditHour} selectedCourse={selectedCourse}></Cart>
        </div>

       
      </div>






    </div>
  )
}

export default App
