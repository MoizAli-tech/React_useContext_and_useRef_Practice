import React,{useState,useEffect} from 'react'
import { useTheme } from './contexts/ThemeContext';

const Component2 = () => {
    let [bool,setBool] = useState(true);
    let {dataFetcher,name} = useTheme();

    useEffect(()=>{
        dataFetcher(bool);
    },[bool])

    

  return (
    <div  className='bg-blue-500 p-2'>
        <h1>i am component 2 {name}</h1>
        <button onClick={()=>{setBool(!bool)}} className='bg-red-500 border-2 border-orange-200 p-2 my-4'>
            Click me to change the colors of parent component
        </button>
    </div>
  )
}

export default Component2