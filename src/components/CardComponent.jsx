import React from 'react'

function CardComponent({product}) {
  return (
    <div className='border border-mainOrange w-[300px] -z-10'>
        <div className='relative'>
          <img src={product.thumbnail} alt="" className='w-full h-[150px] object-cover' />
          <div className='bg-black/50 hover:bg-black/0 absolute inset-0 cursor-pointer transition-all  duration-500 '></div>
        </div>

        <div className='p-[15px] mt-[20px] flex flex-col gap-[10px]'>
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <button className='px-[20px] py-[10px] bg-mainOrange text-white rounded-[10px] hover:scale-105 transition-all duration-300 hover:bg-mainBlue'>View More</button>
        </div>
    </div>
  )
}

export default CardComponent