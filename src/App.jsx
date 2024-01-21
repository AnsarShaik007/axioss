import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';

const url='https://icanhazdadjoke.com';

const App =()=>{
  const [joke,setJokke]=useState('dads joke');

  const fetchData = async ()=>{
    try {
      const response= await axios(url,{
        headers:{
          Accept:'application/json'
        }
      } );
      const data= response.data;
      setJokke(data.joke)
    } catch (error) {
      console.log(error)
    }

    
  }
  useEffect(()=>{
    fetchData();
  },[])
  return(
    <>
    <h1>Dad Jokes Below</h1>
    <p>{joke} </p>
    </>
  )
}

export default App
 