import React, { useState } from 'react'

const Card = ({svg,head,img}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='relative' onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <div className='px-8 py-5 border border-green-300 rounded-xl'>
        <div className='imgbg rounded-lg p-5 w-fit'>
        {svg}
        </div>
        <h1 className='text-2xl my-5 font-semibold'>{head}</h1>
        <p className=' light text-gray-200/85'>Unveil a transparent and organized workspace built on simplicity, flexibility, and power. dstg ewew jjewyh ewjjdsds nndd jjjewyy ewffjjew</p>
      </div>
      {isHovered && (
        <img
          src={`/${img}.png`}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
    </div>
  )
}

export default Card
