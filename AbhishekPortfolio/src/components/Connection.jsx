import React from 'react'

function Connection() {
  return (
    <>
    <div className='px-7 py-7 '>
        <div>
            <h1 className='font-semibold text-[1.4rem] py-7'>Get in touch <i class="ri-phone-fill text-zinc-600"></i></h1>
        </div>
        <div className='bg-zinc-800 px-7 py-3 flex flex-col rounded-lg gap-4  md:rounded-full '>
            <div className='flex flex-col items-center gap-7 lg:flex-row lg:justify-evenly'>
                <div className='flex items-center gap-4 '>
                <i class="ri-github-line text-4xl text-purple-600"></i><a href='https://github.com/Abhishekchauhan50'><h1 className='text-[1.2rem]'>GitHub</h1></a>
                </div>
                <div className='flex items-center gap-4 '>
                <i class="ri-twitter-x-line text-4xl  text-white"></i><a href='https://x.com/Abhishe31924145?t=vJJnMK2kuFI7GYkSEW2rqg&s=03'><h1 className='text-[1.2rem]'>Twitter</h1></a>
                </div>
                <div className='flex items-center gap-4 '>
                <i class="ri-linkedin-line text-4xl text-blue-600"></i><a href='https://www.linkedin.com/in/abhishek-chauhan-94a011229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><h1 className='text-[1.2rem]'>LinkedIN</h1></a>
                </div>
                <div className='flex items-center gap-4 '>
                    <i className="ri-instagram-line text-4xl text-pink-600"></i><a href='https://instagram.com/preabhisheklization?igshid=OGQ5ZDc2ODk2ZA=='><h1 className='text-[1.2rem]'>Instagram</h1></a>
                </div>
                
                

            </div>
        </div>
    </div>
    </>
  )
}

export default Connection
