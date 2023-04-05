import React from 'react';
import Component2 from './Component2';
import { useTheme } from './contexts/ThemeContext';


function Component1() {
    
    let {name} = useTheme();

  return (
    <div className='my-2'>
        <h1>i am component 1 i accessed the value = 
            <div className='text-cyan-500'>
                {name} 
            </div>
           
        from context Provider</h1>
        <Component2/>
    </div>
  )
}

export default Component1