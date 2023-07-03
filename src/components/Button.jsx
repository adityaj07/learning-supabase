import React from 'react'

const Button = ({text}) => {
  return (
    <button className="py-2 px-4 rounded-md bg-red-800 items-start w-[10rem]">{text}</button>
  )
}

export default Button