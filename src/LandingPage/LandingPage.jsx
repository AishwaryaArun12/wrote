import React from 'react'
import Card from './Card'
import ReactPlayer from 'react-player';
import PriceCard from './PriceCard'

const LandingPage = () => {
  return (
    <div className='relative overflow-hidden'>
       <div className='  absolute blur-3xl rounded-full opacity-10 -left-40   top-10 w-96 h-72 bg-[#00FFFF]'></div>
      <div className='  absolute blur-3xl rounded-full opacity-10 -right-48   top-1/4 w-96 h-1/6 bg-[#00FFFF]'></div>
      <div className=' absolute blur-3xl rounded-full opacity-10 -left-48 -z-10  bottom-1/3 w-96 h-2/6 bg-[#00FFFF]'></div>
      
        <div className='flex items-center text-white px-16 md:px-28 py-10 '>
        <svg width="43" height="27" viewBox="0 0 43 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6898 26.2442L0 0.754883L8.70107 0.826906L16.7128 16.0032C18.6025 19.7278 16.3389 24.838 12.6898 26.2442Z" fill="#3D9A72"/>
<path d="M28.7054 26.2442L16.0156 0.754883L24.7167 0.826906L32.7353 16.0032C34.6147 19.7278 32.3546 24.838 28.7054 26.2442Z" fill="#8ECFAE"/>
<path d="M38.1586 9.89932C40.6798 9.89932 42.7235 7.85554 42.7235 5.33442C42.7235 2.8133 40.6798 0.769531 38.1586 0.769531C35.6375 0.769531 33.5938 2.8133 33.5938 5.33442C33.5938 7.85554 35.6375 9.89932 38.1586 9.89932Z" fill="#8FDBB4"/>
</svg>
<p className='navHead mx-3 oxanium'>Wrote</p>
        </div>
        <div className="xl:w-1/2 lg:w-3/4 text-center mx-3 z-40 flex flex-col justify-center sm:mx-auto mt-5">
            <p className='mainHead gilroyBold text-3xl md:text-5xl sm:text-4xl  bg-clip-text text-transparent bg-head-gradient'>
            Streamlines collaboration and 
            project execution
            </p>
            <p className=' font-extralight px-2 sm:px-12 my-5 leading-6 light '>Unveil a transparent and organized workspace built on simplicity, flexibility, and power.  Through boards, lists, and cards, you'll gain an effortless understanding of who's handling which tasks and what needs to be accomplished</p>
            
        </div>
        <div className='flex justify-center mt-6'>
        {/* <input className='h-12 mx-auto z-30 focus:outline-none w-3/4 sm:w-1/2 md:w-4/12 placeholder:text-white rounded-full inputbg px-12 placeholder:my-auto ' placeholder='Enter email address' type="text" name="" id="" /> */}

        </div>

           <div className="w-full relative my-12 -mt-10  object-cover pointer-events-none">
      <ReactPlayer
        className="sm:-mt-16"
        url="/lines.mp4"
        playing
        loop
        muted
        playsinline
        width="100%"
        height="100%"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <button
          onClick={() => {
            window.location.href = 'https://wrote.haladoc.com';
          }}
          className="rounded-xl px-10 buttonbg h-12 z-50 p-3 w-48 relative pointer-events-auto"
        >
          Go to Board
        </button>
      </div>
    </div>


      <div className=''>
      
        <h1 className='text-center font-bold text-3xl'>Explore Wrote  Features</h1>
        <p className='my-4 text-center text-lg light font-light'>we provide effective features</p> 
       <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center px-10 md:px-28 gap-10 py-12'>
        <Card img={'img1'} svg={<svg width="41" className=' text-center ' height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3488 0H12.5887C5.30875 0 0.96875 4.34 0.96875 11.62V28.38C0.96875 35.66 5.30875 40 12.5887 40H29.3488C36.6287 40 40.9688 35.66 40.9688 28.38V11.62C40.9688 4.34 36.6287 0 29.3488 0ZM16.9088 25.8L12.4087 30.3C12.1087 30.6 11.7288 30.74 11.3488 30.74C10.9688 30.74 10.5687 30.6 10.2887 30.3L8.78875 28.8C8.18875 28.22 8.18875 27.26 8.78875 26.68C9.36875 26.1 10.3087 26.1 10.9087 26.68L11.3488 27.12L14.7887 23.68C15.3687 23.1 16.3088 23.1 16.9088 23.68C17.4888 24.26 17.4888 25.22 16.9088 25.8ZM16.9088 11.8L12.4087 16.3C12.1087 16.6 11.7288 16.74 11.3488 16.74C10.9688 16.74 10.5687 16.6 10.2887 16.3L8.78875 14.8C8.18875 14.22 8.18875 13.26 8.78875 12.68C9.36875 12.1 10.3087 12.1 10.9087 12.68L11.3488 13.12L14.7887 9.68C15.3687 9.1 16.3088 9.1 16.9088 9.68C17.4888 10.26 17.4888 11.22 16.9088 11.8ZM32.0887 29.24H21.5888C20.7688 29.24 20.0888 28.56 20.0888 27.74C20.0888 26.92 20.7688 26.24 21.5888 26.24H32.0887C32.9287 26.24 33.5887 26.92 33.5887 27.74C33.5887 28.56 32.9287 29.24 32.0887 29.24ZM32.0887 15.24H21.5888C20.7688 15.24 20.0888 14.56 20.0888 13.74C20.0888 12.92 20.7688 12.24 21.5888 12.24H32.0887C32.9287 12.24 33.5887 12.92 33.5887 13.74C33.5887 14.56 32.9287 15.24 32.0887 15.24Z" fill="white"/>
        </svg>}  head={'Task Management'}/>
        <Card img={'img2'} svg={<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3036 28.3158L20.2483 24.3625L11.3505 15.4595C10.074 14.1813 10.0723 12.0953 11.3572 10.807C12.6405 9.52371 14.717 9.52371 15.9986 10.8053L16.3052 11.1124L20.255 7.16072L19.9483 6.85366C17.6951 4.60082 14.5353 3.81315 11.6489 4.49068C11.2339 1.94412 9.02902 0.00166878 6.36919 0C3.41438 0 1.01953 2.3997 1.01953 5.35844C1.01953 7.91 2.80108 10.046 5.18593 10.585C4.28266 13.6105 5.02094 17.0249 7.40579 19.4129L16.3036 28.3158Z" fill="white"/>
<path d="M21.4893 6.86201C23.8658 4.48233 27.2522 3.73305 30.2621 4.61917C30.622 2.01088 32.8586 0 35.5634 0C38.5182 0 40.9147 2.39803 40.9147 5.35844C40.9147 8.07855 38.8898 10.3247 36.2683 10.6702C37.13 13.6723 36.3783 17.0399 34.0168 19.4062L33.7102 19.7149L29.7654 15.7599L30.0704 15.4529C31.352 14.1696 31.352 12.0886 30.0721 10.807C28.7938 9.52871 26.7223 9.52704 25.4357 10.8137L16.5396 19.7149L12.5898 15.7633L21.4893 6.86201Z" fill="white"/>
<path d="M30.0714 24.9126C31.3579 26.2009 31.3546 28.2752 30.078 29.5551C28.7981 30.8368 26.7199 30.8368 25.4367 29.5535L25.1333 29.2498L21.1886 33.2048L21.4919 33.5068C23.8951 35.9132 27.3349 36.6491 30.3713 35.7129C30.8663 38.161 33.0245 40.0017 35.616 40.0017C38.5708 40.0017 40.9673 37.6053 40.9673 34.6449C40.9673 31.9415 38.9691 29.7053 36.3693 29.3399C37.0759 26.4312 36.291 23.2338 34.0211 20.9609L25.1333 12.0547L21.1836 16.0047L30.0714 24.9126Z" fill="white"/>
<path d="M24.8872 20.6484L28.832 24.6034L19.9475 33.508C17.6677 35.7909 14.4546 36.5669 11.5364 35.8426C10.9914 38.224 8.86158 39.9962 6.32008 39.9979C3.3636 39.9979 0.96875 37.5999 0.96875 34.6411C0.96875 32.1079 2.72531 29.9836 5.08516 29.4262C4.33854 26.4908 5.11182 23.2484 7.40667 20.9505L7.70832 20.6484L11.6581 24.6001L11.3514 24.9038C10.0698 26.1871 10.0715 28.2664 11.3531 29.5497C12.6397 30.838 14.7212 30.8346 15.9995 29.5547L24.8872 20.6484Z" fill="white"/>
</svg>
} head={'Team Collaboration'}/>
        <Card img={'img3'} svg={<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.9062 10.1235C25.3912 10.1235 20.9062 14.6271 20.9062 20.165C20.9062 25.7029 25.3912 30.2065 30.9062 30.2065C36.4212 30.2065 40.9062 25.7029 40.9062 20.165C40.9062 14.6271 36.4212 10.1235 30.9062 10.1235ZM32.7046 24.2502L29.2396 20.8713V15.1426H32.5729V19.4554L35.0262 21.8486L32.7046 24.2502ZM21.9462 31.8801H9.87792C11.1012 28.7003 13.8413 26.2368 15.9313 24.7272C18.0112 26.2267 20.7379 28.6819 21.9462 31.8801ZM30.7912 33.5487C30.8446 34.1009 30.9062 34.6499 30.9062 35.2273V40.248H0.90625V35.2273C0.90625 28.5229 4.63958 23.4904 8.30958 20.165C4.63958 16.8396 0.90625 11.8071 0.90625 5.10278C0.90625 2.33467 3.14958 0.0820312 5.90625 0.0820312H25.9062C28.6629 0.0820312 30.9062 2.33467 30.9062 5.10278C30.9062 5.68016 30.8446 6.2291 30.7912 6.78138C23.4929 6.84498 17.5729 12.8197 17.5729 20.165C17.5729 20.7474 17.6229 21.3181 17.6946 21.8821C17.3962 21.6712 17.1079 21.4704 16.8396 21.2964L15.9262 20.6972L15.0146 21.298C12.0763 23.2327 7.00458 27.3648 6.05958 33.2892L5.74958 35.2273H26.0579L25.7546 33.2943C25.7079 33.0014 25.6446 32.7169 25.5796 32.4324C27.1779 33.1353 28.9379 33.5319 30.7879 33.547L30.7912 33.5487Z" fill="white"/>
</svg>
} head={'Project Tracking'}/>
        <Card img={'img4'} svg={<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9688 20.1513C10.4537 20.1513 5.96875 15.6477 5.96875 10.1099C5.96875 4.57197 10.4537 0.0683594 15.9688 0.0683594C21.4837 0.0683594 25.9688 4.57197 25.9688 10.1099C25.9688 15.6477 21.4837 20.1513 15.9688 20.1513ZM4.30208 40.2343H19.3021V23.4985H9.30208C4.70042 23.4985 0.96875 27.2457 0.96875 31.8664V40.2343H4.30208ZM36.8021 18.4778H26.8021C24.5037 18.4778 22.6354 20.3555 22.6354 22.6617V40.2343H40.9688V22.6617C40.9688 20.3555 39.1004 18.4778 36.8021 18.4778ZM35.9671 33.54H27.6337V30.1928H35.9671V33.54ZM35.9671 26.8407H27.6337V23.4935H35.9671V26.8407Z" fill="white"/>
</svg>
} head={'Employee Management'}/>
        <Card img={'img5'} svg={<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.9375 20.165C25.4225 20.165 20.9375 24.6686 20.9375 30.2065C20.9375 35.7444 25.4225 40.248 30.9375 40.248C36.4525 40.248 40.9375 35.7444 40.9375 30.2065C40.9375 24.6686 36.4525 20.165 30.9375 20.165ZM30.9375 23.5122C32.7792 23.5122 34.2708 25.01 34.2708 26.8593C34.2708 28.7087 32.7792 30.2065 30.9375 30.2065C29.0958 30.2065 27.6042 28.7087 27.6042 26.8593C27.6042 25.01 29.0958 23.5122 30.9375 23.5122ZM35.9375 34.6298C34.7142 36.0222 32.9275 36.9008 30.9375 36.9008C28.9475 36.9008 27.1608 36.0205 25.9375 34.6298V34.3905C25.9375 33.0047 27.0575 31.8801 28.4375 31.8801H33.4375C34.8175 31.8801 35.9375 33.0047 35.9375 34.3905V34.6298ZM0.9375 13.4707V11.7971C0.9375 7.18304 4.67583 3.4292 9.27083 3.4292H10.9375V1.75561C10.9375 0.831796 11.6842 0.0820312 12.6042 0.0820312C13.5242 0.0820312 14.2708 0.831796 14.2708 1.75561V3.4292H27.6042V1.75561C27.6042 0.831796 28.3508 0.0820312 29.2708 0.0820312C30.1908 0.0820312 30.9375 0.831796 30.9375 1.75561V3.4292H32.6042C37.1992 3.4292 40.9375 7.18304 40.9375 11.7971V13.4707H0.9375ZM22.1192 40.248H9.27083C4.67583 40.248 0.9375 36.4942 0.9375 31.8801V16.8179H30.9375C23.5742 16.8179 17.6042 22.8126 17.6042 30.2065C17.6042 34.2064 19.3508 37.7945 22.1192 40.248Z" fill="white"/>
</svg>
} head={'Attendance & Leave'}/>
        <Card img={'img6'} svg={<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9688 40C18.2188 40 15.9688 37.75 15.9688 35V5C15.9688 2.25 18.2188 0 20.9688 0C23.7188 0 25.9688 2.25 25.9688 5V35C25.9688 37.75 23.7188 40 20.9688 40ZM35.9688 40C33.2188 40 30.9688 37.75 30.9688 35V15C30.9688 12.25 33.2188 10 35.9688 10C38.7188 10 40.9688 12.25 40.9688 15V35C40.9688 37.75 38.7188 40 35.9688 40ZM5.96875 40C3.21875 40 0.96875 37.75 0.96875 35V25C0.96875 22.25 3.21875 20 5.96875 20C8.71875 20 10.9688 22.25 10.9688 25V35C10.9688 37.75 8.71875 40 5.96875 40Z" fill="white"/>
</svg>
} head={'Employee Statistics'}/>
       </div>
      </div>
      <div className='lg:px-10 grid gap-10 grid-cols-1 bg-black z-40 sm:grid-cols-3 my-12 '>
        <div className='sm:col-span-2 flex flex-col  justify-center items-center'>
            <div className='lg:px-20 my-auto space-y-6'>
            <h1 className='lg:text-4xl text-2xl md:text-3xl oxanium'>Co-Powered By</h1>
            <h1 className='lg:text-4xl xl:text-5xl text-4xl animated-text md:text-3xl oxaniumBold font-extrabold'>Adam Technologies</h1>
            </div>
        </div>
        <div>
            <img src="/Earth-gif.gif" alt="" />
        </div>
      </div>
      <div>
        <h1 className=' text-3xl gilroyBold text-center'>Our Pricing</h1>
        <p className='my-2 light text-center'>we provide effective features</p>
        <div className=' grid grid-cols-1 md:grid-cols-3 px-10 md:px-20 gap-10'>
        <PriceCard price={0} type={'Free'} features={['Employee directory','Task management','Calendar integration','File storage','Communication tools']}/>
        <PriceCard price={20} type={'Premium'} features={['Advanced employee directory','Project management','Resource scheduling','Version control','Team collaboration']}/>
        <PriceCard price={120} type={'Enterprise'} features={['Employee directory','Task management','Calendar integration','File storage','Communication tools']}/>
        </div>
      </div>
      <div className='bg-[#0B0B0B] p-20 relative mt-40 overflow-hidden'>
      <div className=' absolute blur-3xl rounded-full opacity-[0.02] -right-52   -top-10 w-1/2 h-full bg-[#00FFFF]'></div>
        <div className='flex'>
        <svg width="40" height="26" className='mt-3' viewBox="0 0 43 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6898 26.2305L0 0.741211L8.70107 0.813234L16.7128 15.9895C18.6025 19.7141 16.3389 24.8244 12.6898 26.2305Z" fill="#3D9A72"/>
<path d="M28.7054 26.2305L16.0156 0.741211L24.7167 0.813234L32.7353 15.9895C34.6147 19.7141 32.3546 24.8244 28.7054 26.2305Z" fill="#8ECFAE"/>
<path d="M38.1586 9.88564C40.6798 9.88564 42.7235 7.84187 42.7235 5.32075C42.7235 2.79963 40.6798 0.755859 38.1586 0.755859C35.6375 0.755859 33.5938 2.79963 33.5938 5.32075C33.5938 7.84187 35.6375 9.88564 38.1586 9.88564Z" fill="#8FDBB4"/>
</svg>
 <p className='mx-2 text-4xl'>Wrote</p>
        </div>
        <div className='flex mt-10'>
            <div className=' space-y-3'>
                <p>Email</p>
                <p>hello@wrote.com</p>
            </div>
            <div className='ml-10 space-y-3'>
                <p>Phone Number</p>
                <p>+1 (201) 895-3801</p>
            </div>
        </div>
        <hr className=' opacity-30 my-10'/>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 xl:flex'>
          <div className='flex items-center mr-auto'>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0013 2.65234C5.40964 2.65234 1.66797 6.39401 1.66797 10.9857C1.66797 15.5773 5.40964 19.319 10.0013 19.319C14.593 19.319 18.3346 15.5773 18.3346 10.9857C18.3346 6.39401 14.593 2.65234 10.0013 2.65234ZM13.9846 9.06901L9.25963 13.794C9.14297 13.9107 8.98464 13.9773 8.81797 13.9773C8.6513 13.9773 8.49297 13.9107 8.3763 13.794L6.01797 11.4357C5.7763 11.194 5.7763 10.794 6.01797 10.5523C6.25963 10.3107 6.65964 10.3107 6.9013 10.5523L8.81797 12.469L13.1013 8.18568C13.343 7.94401 13.743 7.94401 13.9846 8.18568C14.2263 8.42734 14.2263 8.81901 13.9846 9.06901Z" fill="white"/>
</svg>
 <p className='mx-2'> Available on all platforms</p>
          </div>
          <div className='flex border rounded-full p-1 px-3 border-gray-500 mr-3'>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.50083 5.55216L8.64833 4.70549V10.6447H2.5V5.55299L2.50083 5.55216ZM2.50083 16.4205L8.64833 17.268V11.4013H2.5L2.50083 16.4205ZM9.32417 17.358L17.5008 18.4863V11.4013H9.32417V17.358ZM9.32417 4.61466V10.6447H17.5008V3.48633L9.32417 4.61466Z" fill="white"/>
</svg>
<p className='mx-2'>Windows</p>
          </div>
          <div className='flex border rounded-full p-1 px-3  border-gray-500 mr-3'>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2106 17.8863C13.3939 18.678 12.5023 18.553 11.6439 18.178C10.7356 17.7947 9.90225 17.778 8.94392 18.178C7.74392 18.6947 7.11059 18.5447 6.39392 17.8863C2.32725 13.6947 2.92725 7.31133 7.54392 7.07799C8.66892 7.13633 9.45225 7.69466 10.1106 7.74466C11.0939 7.54466 12.0356 6.96966 13.0856 7.04466C14.3439 7.14466 15.2939 7.64466 15.9189 8.54466C13.3189 10.103 13.9356 13.528 16.3189 14.4863C15.8439 15.7363 15.2273 16.978 14.2023 17.8947L14.2106 17.8863ZM10.0273 7.02799C9.90225 5.16966 11.4106 3.63633 13.1439 3.48633C13.3856 5.63633 11.1939 7.23633 10.0273 7.02799Z" fill="white"/>
</svg>

<p className='mx-2'>macOs</p>
          </div>
          <div className='flex border rounded-full p-1 px-3 border-gray-500 mr-3'>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.19047 19.1215C4.45964 18.2948 1.66797 14.9665 1.66797 10.9857C1.66797 9.46735 2.0738 8.04402 2.7838 6.81735L6.35297 12.9998C6.75396 13.7266 7.36292 14.317 8.10175 14.6953C8.84057 15.0737 9.67556 15.2226 10.4996 15.1232L8.1913 19.1215H8.19047ZM10.0013 19.319L13.5738 13.1315C13.9637 12.4838 14.1692 11.7417 14.168 10.9857C14.1693 10.0839 13.8768 9.20629 13.3346 8.48568H17.953C18.2069 9.29469 18.3356 10.1378 18.3346 10.9857C18.3346 15.5882 14.6038 19.319 10.0013 19.319ZM12.1446 12.2732C11.9207 12.6465 11.6032 12.9548 11.2235 13.1676C10.8437 13.3805 10.415 13.4904 9.97974 13.4866C9.54446 13.4829 9.11772 13.3654 8.74177 13.146C8.36582 12.9266 8.05369 12.6128 7.8363 12.2357L7.81214 12.194C7.60111 11.8116 7.49395 11.3806 7.50133 10.9439C7.50872 10.5072 7.63038 10.08 7.85421 9.70497C8.07804 9.32991 8.39623 9.02004 8.77708 8.80621C9.15793 8.59239 9.58815 8.48207 10.0249 8.48625C10.4616 8.49043 10.8897 8.60896 11.2664 8.83003C11.6431 9.05111 11.9553 9.36701 12.1719 9.74628C12.3885 10.1256 12.5019 10.555 12.501 10.9917C12.5 11.4285 12.3846 11.8574 12.1663 12.2357L12.1446 12.2732ZM3.8613 5.35152C4.64108 4.49976 5.5898 3.81984 6.64695 3.35511C7.70411 2.89038 8.84651 2.65104 10.0013 2.65235C11.4644 2.65176 12.9019 3.03654 14.1691 3.76799C15.4362 4.49944 16.4884 5.55175 17.2196 6.81902H10.0013C9.18509 6.81884 8.38679 7.05835 7.70548 7.50782C7.02417 7.95728 6.48984 8.59692 6.1688 9.34735L3.8613 5.35152Z" fill="white"/>
</svg>

<p className='mx-2'>Chrome</p>
          </div>
          <div className='flex border rounded-full p-1 px-3 border-gray-500 mr-3'>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2106 17.8863C13.3939 18.678 12.5023 18.553 11.6439 18.178C10.7356 17.7947 9.90225 17.778 8.94392 18.178C7.74392 18.6947 7.11059 18.5447 6.39392 17.8863C2.32725 13.6947 2.92725 7.31133 7.54392 7.07799C8.66892 7.13633 9.45225 7.69466 10.1106 7.74466C11.0939 7.54466 12.0356 6.96966 13.0856 7.04466C14.3439 7.14466 15.2939 7.64466 15.9189 8.54466C13.3189 10.103 13.9356 13.528 16.3189 14.4863C15.8439 15.7363 15.2273 16.978 14.2023 17.8947L14.2106 17.8863ZM10.0273 7.02799C9.90225 5.16966 11.4106 3.63633 13.1439 3.48633C13.3856 5.63633 11.1939 7.23633 10.0273 7.02799Z" fill="white"/>
</svg>

<p className='mx-2'>iOS</p>
          </div>
          <div className='flex border rounded-full p-1 px-3 border-gray-500 mr-3'>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_535_6243)">
<path d="M12.4806 3.50129L13.2806 2.05796C13.2908 2.03946 13.2973 2.01913 13.2997 1.99813C13.302 1.97713 13.3003 1.95586 13.2944 1.93555C13.2886 1.91524 13.2788 1.89628 13.2656 1.87974C13.2524 1.86321 13.2362 1.84944 13.2177 1.83921C13.1992 1.82897 13.1788 1.82249 13.1578 1.82011C13.1368 1.81773 13.1156 1.81952 13.0953 1.82536C13.0749 1.8312 13.056 1.84099 13.0394 1.85416C13.0229 1.86733 13.0091 1.88363 12.9989 1.90212L12.1906 3.36046C11.5005 3.05791 10.7553 2.90171 10.0018 2.90171C9.24838 2.90171 8.50311 3.05791 7.81307 3.36046L7.00474 1.90212C6.98408 1.86455 6.94933 1.83673 6.90815 1.82477C6.86697 1.81282 6.82273 1.81771 6.78516 1.83837C6.74758 1.85904 6.71976 1.89378 6.7078 1.93496C6.69585 1.97614 6.70074 2.02038 6.72141 2.05796L7.52141 3.50129C6.76023 3.8767 6.11713 4.45446 5.66261 5.17121C5.2081 5.88797 4.95973 6.71604 4.94474 7.56462H15.0589C15.0438 6.71586 14.7951 5.88767 14.3403 5.1709C13.8855 4.45413 13.2421 3.87647 12.4806 3.50129ZM7.66807 5.71379C7.58448 5.71379 7.50276 5.68899 7.43326 5.64253C7.36376 5.59607 7.30961 5.53003 7.27765 5.45278C7.2457 5.37553 7.23738 5.29054 7.25375 5.20856C7.27012 5.12658 7.31045 5.0513 7.36962 4.99224C7.42879 4.93319 7.50415 4.89301 7.58616 4.87681C7.66817 4.8606 7.75315 4.86908 7.83034 4.90119C7.90752 4.9333 7.97345 4.98758 8.01977 5.05717C8.0661 5.12676 8.09074 5.20853 8.09057 5.29212C8.09035 5.40403 8.04574 5.51128 7.96653 5.59034C7.88732 5.66939 7.77998 5.71379 7.66807 5.71379ZM12.3364 5.71379C12.2528 5.71379 12.1711 5.68899 12.1016 5.64253C12.0321 5.59607 11.9779 5.53003 11.946 5.45278C11.914 5.37553 11.9057 5.29054 11.9221 5.20856C11.9385 5.12658 11.9788 5.0513 12.0379 4.99224C12.0971 4.93319 12.1725 4.89301 12.2545 4.87681C12.3365 4.8606 12.4215 4.86908 12.4987 4.90119C12.5759 4.9333 12.6418 4.98758 12.6881 5.05717C12.7344 5.12676 12.7591 5.20853 12.7589 5.29212C12.7587 5.40403 12.7141 5.51128 12.6349 5.59034C12.5557 5.66939 12.4483 5.71379 12.3364 5.71379ZM4.94307 15.2946C4.94285 15.4555 4.9744 15.6149 5.03589 15.7635C5.09738 15.9122 5.18762 16.0473 5.30143 16.161C5.41523 16.2748 5.55037 16.3649 5.69909 16.4263C5.84781 16.4877 6.00718 16.5191 6.16807 16.5188H6.97891V19.0188C6.97891 19.3195 7.09835 19.6079 7.31097 19.8205C7.52359 20.0331 7.81197 20.1525 8.11266 20.1525C8.41335 20.1525 8.70172 20.0331 8.91434 19.8205C9.12696 19.6079 9.24641 19.3195 9.24641 19.0188V16.5188H10.7581V19.0188C10.7581 19.3194 10.8775 19.6076 11.09 19.8202C11.3026 20.0327 11.5908 20.1521 11.8914 20.1521C12.192 20.1521 12.4803 20.0327 12.6928 19.8202C12.9053 19.6076 13.0247 19.3194 13.0247 19.0188V16.5188H13.8364C13.9971 16.5189 14.1562 16.4873 14.3047 16.4259C14.4532 16.3645 14.5881 16.2743 14.7017 16.1607C14.8153 16.0471 14.9054 15.9122 14.9668 15.7637C15.0283 15.6153 15.0598 15.4561 15.0597 15.2955V7.96462H4.94307V15.2946ZM3.38724 7.76962C3.08665 7.77006 2.79851 7.88972 2.58604 8.10235C2.37358 8.31498 2.25413 8.6032 2.25391 8.90379V13.628C2.25391 13.7768 2.28322 13.9242 2.34018 14.0617C2.39713 14.1992 2.48061 14.3241 2.58585 14.4293C2.69109 14.5346 2.81603 14.6181 2.95353 14.675C3.09103 14.732 3.23841 14.7613 3.38724 14.7613C3.53607 14.7613 3.68345 14.732 3.82095 14.675C3.95845 14.6181 4.08339 14.5346 4.18863 14.4293C4.29387 14.3241 4.37735 14.1992 4.4343 14.0617C4.49126 13.9242 4.52057 13.7768 4.52057 13.628V8.90379C4.52013 8.60335 4.40059 8.31534 4.18814 8.10289C3.97569 7.89044 3.68768 7.7709 3.38724 7.77046V7.76962ZM16.6139 7.76962C16.3133 7.77006 16.0252 7.88972 15.8127 8.10235C15.6002 8.31498 15.4808 8.6032 15.4806 8.90379V13.628C15.4806 13.7768 15.5099 13.9242 15.5668 14.0617C15.6238 14.1992 15.7073 14.3241 15.8125 14.4293C15.9178 14.5346 16.0427 14.6181 16.1802 14.675C16.3177 14.732 16.4651 14.7613 16.6139 14.7613C16.7627 14.7613 16.9101 14.732 17.0476 14.675C17.1851 14.6181 17.3101 14.5346 17.4153 14.4293C17.5205 14.3241 17.604 14.1992 17.661 14.0617C17.7179 13.9242 17.7472 13.7768 17.7472 13.628V8.90379C17.7468 8.60335 17.6273 8.31534 17.4148 8.10289C17.2024 7.89044 16.9143 7.7709 16.6139 7.77046V7.76962Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_535_6243">
<rect width="20" height="20" fill="white" transform="translate(0 0.986328)"/>
</clipPath>
</defs>
</svg>

<p className='mx-2'>Android</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
