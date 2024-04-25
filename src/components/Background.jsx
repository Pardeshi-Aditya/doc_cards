import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
      <div className='absolute w-full py-10 top-[5%] flex justify-center text-zinc-600 text-xl'>Documents</div>
      <h1 className='absolute text-[13vw] text-zinc-900 leading-none tracking-tighter -translate-y-[50%] top-1/2 -translate-x-[50%] left-1/2 font-semibold'>DOCS.</h1>
    </div>
    </>
  )
}

export default Background
