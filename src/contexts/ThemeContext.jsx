import React,{createContext,useContext,useState} from 'react';

const themeContext = createContext();

export function useTheme(){
    return useContext(themeContext);
}

const ThemeContext = ({children}) => {
    let [data,setData] = useState(false);
    
    function dataFetcher(input){
        setData(input)
    }
  return (
        <themeContext.Provider value={{name:"ali",dataFetcher}}>
            <div className={`p-4 mx-auto text-center ${data? 'bg-black text-white':''}`}>
                <h1 className='text-4xl'> Explanation of Context</h1>

                {children}
            </div>
        </themeContext.Provider>
  )
}

export default ThemeContext