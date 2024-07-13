import React from 'react'
import './Button.css'

const Button = ({title, icon}) => {
  return (
    <button className='button'>
       {icon && <img src={icon} alt="icon" className="button__icon" />}
        {title}
    </button>
  )
}

export default Button