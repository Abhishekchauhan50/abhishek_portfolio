import React from 'react'

function About() {
  return (
    <>
    <div className='px-5 py-7 md:px-20 '>
        <div className=''>
            <h1 className='font-semibold text-[1.4rem]'>Abhout me <i class="ri-pen-nib-line font-thin text-[1rem] text-zinc-600"></i></h1>
            <p className='text-[.8rem] tracking-wide md:text-lg text-zinc-400'>Hello! I’m <span className='text-green-400 '>Abhishek Chauhan</span>, a passionate web developer with a diverse skill set in front-end and back-end technologies.  My journey in web development started with a keen interest in creating visually appealing and highly functional websites. Over the years, I’ve honed my skills across various frameworks and tools to ensure I can deliver top-notch solutions for any project.</p>
        </div>
        <div className='py-7'>
            <h1 className='font-semibold'>Education <i class="ri-graduation-cap-fill text-zinc-600"></i></h1>
            <p className='text-[1rem] tracking-wide text-zinc-400'>Institute of Engineering and
Rural Technology, Prayagraj</p>
            <p className='text-[1rem] tracking-wide text-zinc-600'>Bachelor's Degree in Instrumentation Engineering
2020 – 2024</p>
           
        </div>
        
    </div>
    </>
  )
}

export default About
