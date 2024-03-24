import React, { ReactNode, useState } from 'react'

interface Props{
    children:ReactNode,
    onColse:()=> void
}



const Alert = ({children, onColse}:Props) => {
  return (
    <div className="alert alert-primary">
        {children}
    <button type='button'onClick={onColse} className='btn-close'></button>
    </div>
  )
}

export default Alert

