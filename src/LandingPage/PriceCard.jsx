import React from 'react'

const PriceCard = ({price,type,features}) => {
  return (
    <div className='p-10 pricebg rounded-3xl mt-12 parent  hover:border'>
      <div className=' p-2 w-fit rounded-full pricebuttonbg ;
' >
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10.9863C20 16.5092 15.5228 20.9863 10 20.9863C4.47715 20.9863 0 16.5092 0 10.9863C0 5.46348 4.47715 0.986328 10 0.986328C15.5228 0.986328 20 5.46348 20 10.9863ZM4.5 10.9863C4.5 14.0239 6.96243 16.4863 10 16.4863C13.0376 16.4863 15.5 14.0239 15.5 10.9863C15.5 7.94876 13.0376 5.48633 10 5.48633C6.96243 5.48633 4.5 7.94876 4.5 10.9863Z" fill="white"/>
</svg>

      </div>
      <h1 className='text-xl my-3'>{type} </h1>
      <h1 className=' text-4xl mb-4 font-semibold'>{price ? '$': ''}{price} <span className=' text-lg font-light'>/per month</span></h1>
      <button className='pricebuttonbg my-10 py-2 w-full rounded-xl border border-gray-400/20 mx-auto'>Get started</button>
      <hr className='opacity-30' />
      <h1 className='mt-10 mb-5'>Features</h1>
     <div className=' space-y-4'>
     {features.map(data=><div className=' flex items-center font-extralight'>
      <svg width="16" className='mr-2' height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7151 4.28605C15.3618 6.93272 15.3151 11.2527 12.5818 13.846C10.0551 16.2394 5.9551 16.2394 3.42177 13.846C0.681765 11.2527 0.635091 6.93272 3.28842 4.28605C5.88842 1.67939 10.1151 1.67939 12.7151 4.28605Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.16797 8.98628L7.05464 10.8729L10.8346 7.09961" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className='light'>{data}</p>
      </div>)}
     </div>
    </div>
  )
}

export default PriceCard
