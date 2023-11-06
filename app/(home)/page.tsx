import React from 'react'

const page = () => {
  return (
    <>
    <div className='overflow-hidden'>
      <video src="./assets/party.mp4" autoPlay muted loop className=' h-screen object-cover w-screen bg-overlay'>
      </video>
      <h1 className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-4xl md:6xl lg:text-7xl text-white text-center w-screen md:w-auto p-3'>
        Experience the most awaited intercollegiate fest
      </h1>
    </div>
    </>
  )
}

export default page
