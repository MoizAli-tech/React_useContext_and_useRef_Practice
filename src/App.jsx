import React,{createContext} from 'react';
import Component1 from './Component1';
import ThemeContext from './contexts/ThemeContext';
import Ref from './Ref';

 

const App = () => {

   
  return (
    <div className=''>
        
        <ThemeContext>
            <Component1/>
        </ThemeContext>

        <Ref/>
      
    </div>
  )
}

export default App