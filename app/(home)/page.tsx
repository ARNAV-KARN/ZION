import React from 'react'

const page = () => {
  return (
    <>
    <div className='overflow-hidden relative'>
      <video src="./assets/party.mp4" autoPlay muted loop className=' h-screen object-cover w-screen bg-overlay'>
      </video>
      <h1 className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-4xl md:6xl lg:text-7xl text-white text-center w-screen md:w-auto p-3'>
        Experience the most awaited intercollegiate fest
      </h1>
    </div>
    <div className='h-[100vh] bg-neutral-900 flex items-center overflow-hidden flex-wrap'>
        <div className='text-white lg:text-9xl w-[50%] text-7xl pl-40 text-left col-span-2'>
          WHAT <br /> 
          ARE <br />
          WE <br />
          ABOUT
        </div>
        <div className='text-white/40 text-base w-[50%] text-left pl-5 pr-40 leading-7 col-span-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio sed illum! Quas enim vero dolorum incidunt cum. Iste tempora pariatur quisquam dolores quidem? Facilis itaque in tenetur non quas!
          Porro obcaecati iusto vitae inventore, eaque quibusdam aperiam est error possimus fuga nemo saepe, corrupti aliquid, tempora laboriosam modi reprehenderit adipisci rerum quas veniam. Veniam placeat deserunt esse quae quasi!
        </div>
    </div>
    </>
  )
}

export default page
