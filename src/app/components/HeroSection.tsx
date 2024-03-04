import React from 'react'

function HeroSection() {
  return (<>
    <div className='md:flex h-[400px] font-serif  mt-32 justify-between w-full '> 
    {/*left section  */}
 <div className="left flex justify-center ml-7  mt-[150px]  h-60 w-72 ">
    <img src="/Pic-for-website/hero3.png" alt="not found" />
 </div>

 {/* middle section */}
 <div className='flex ml-10 flex-col justify-center text-center items-center w-1/3 '>
    <img src="/Pic-for-website/hero1.png   " alt="" className=' h-16 w-[392px]' />
    <p className='text-center mt-6'>Need a quality, custom logo design? Our team will create a stunning, original logo design for you that will make your business stand out from the crowd and help you wow competitors and customers alike.</p>
    <button className=' bg-custom_color-100 hover:bg-white   hover:border-solid hover:border-2  hover:border-custom_color-100 hover:text-black    rounded-full w-[185px] shadow-2xl text-white mt-5  p-1   font-bold '>FIND OUT MORE</button>

 </div>

  {/* right section */}
  <div className='flex  '>
    <img src="/Pic-for-website/hero2.png" className='  w-96 h-80' alt="" />

 </div>
    </div>



<div className=' flex  flex-col items-center justify-center  h-[300px] w-full bg-custom_color-101'>
    <div className='  font-serif text-center'>
<h1 className=' font-extrabold text-3xl mb-7'>Custom Logo Designs</h1>
<p>Your logo design will be created completely from scratch by our expert team to give your business the truly unique <br /> logo it deserves. Take a look in our portfolio to see the quality you can expect.

</p>
<button className=' bg-custom_color-100 hover:bg-white   hover:border-solid hover:border-2  hover:border-custom_color-100 hover:text-black    rounded-full w-[185px] shadow-2xl text-white mt-5  p-1   font-bold '>VIEW PORTFOLIO</button>
</div>
</div>
</>
  )
}

export default HeroSection