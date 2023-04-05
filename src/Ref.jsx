import React,{forwardRef, useRef,useState} from 'react'
import ForwardRef from './ForwardRef';

const Ref = () => {
    let inputRef = useRef();
    let divRef = useRef();
    let preRef = useRef();
    let childRef = useRef();


    let[input,setInput] = useState("");
    

    function refHandler(){
        inputRef.current.focus();
        
    }

    function inputHandler(e){
        preRef.current= input;
        setInput(e.target.value)
    }
    // IT WILL HOLD THE VALUE OF INPUT EVEN IF THE COMPONENT RERENDERS
    console.log(preRef.current)

    
  return (
    <div className='bg-red-500 text-center p-4'>
            <h1 className='text-4xl'> Explanation of Ref</h1>
        <div className='bg-cyan-500 p-4'>
            <input ref={inputRef} value={input} onChange={(e)=>{inputHandler(e)}}/>
            <div ref={divRef}>
                hey there  my height will be calculated using ref it is {divRef.current.offsetHeight} px
            </div>
            <span>i am holding the value of previous entered input {preRef.current}</span>
        </div>
        
       
        <ForwardRef ref={childRef}/>
        <div>
            Height of child component calculated uing forward ref is {childRef.current.offsetHeight}
        </div>
        <button  className="text-white bg-cyan-500 border-2 border-white p-2" onClick={refHandler}>
            Click me to focus input
        </button>
    </div>
  )
}

export default Ref