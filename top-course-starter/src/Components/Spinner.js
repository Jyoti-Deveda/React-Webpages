import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center my-auto'>
        <div className='spinner'></div>
        <p className='text-bgDark text-lg font-lg font-semibold '>Loading  </p>
    </div>
  )
}

export default Spinner;
