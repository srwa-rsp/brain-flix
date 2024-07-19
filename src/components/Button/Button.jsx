import React from 'react'
import './Button.css'

const Button = ({title, icon, color, type,onClick}) => {
  return (
    <button type={type} onClick={onClick} className={`button ${color === 'secondary'? `button__secondary` : ''}`}>
       {icon && <img src={icon} alt="icon" className="button__icon" />}
        {title}
    </button>
  )
}

export default Button