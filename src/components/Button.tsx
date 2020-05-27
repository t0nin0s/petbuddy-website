import React from 'react'
import './Button.scss'

interface Button {
  clickHandler: (e: any) => void;
}

export const Button:React.FC<Button> = (props) => {
  return (
    <button
      className='button'
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  )
}