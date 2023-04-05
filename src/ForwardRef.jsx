import React,{forwardRef} from 'react'

const ForwardRef = (props,childRef) => {
  return (
    <div ref={childRef}>hey i am Child Component</div>
  )
}

export default forwardRef(ForwardRef)