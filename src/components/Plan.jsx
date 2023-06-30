import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* left side  */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1142984/pexels-photo-1142984.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/2072583/pexels-photo-2072583.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1143005/pexels-photo-1143005.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/2602545/pexels-photo-2602545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
      {/* right side  */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sit?</p>
        <p className='pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium consequuntur dolor, vitae sequi nam quisquam iste velit id placeat asperiores quidem esse veniam blanditiis, facilis eveniet impedit dicta! Id, odio.</p>
        <div>
          <button className='border-black mr-4 hover:bg-black hover:text-white'>Learn More</button>
          <button className='bg-black text-white border-black hover:text-black hover:bg-white'>Book Your Trip</button>
        </div>
      </div>
    </div>
  )
}

export default Plan