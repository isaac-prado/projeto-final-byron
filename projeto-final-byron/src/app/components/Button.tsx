import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-white text-black py-2 px-6 mr-4 rounded md:ml-8 hover:bg-gray-300 duration-500'>
        {props.children}
    </button>
  )
}

export default Button