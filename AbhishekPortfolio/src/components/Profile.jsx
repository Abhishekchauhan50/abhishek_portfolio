import React from 'react'

function Profile() {
  return (
    <>
    <div className='w-full h-80   relative  '>
        <div className='w-full h-40 bg-gradient-to-r relative from-fuchsia-500 to-cyan-500 overflow-hidden  top-10  '>
            {/* <div className='flex flex-col gap-2   absolute  bottom-5 right-5 md:flex-row md:gap-24  '>
              <button  className='  bg-indigo-600 text-sm  rounded-3xl px-5 py-2 '> <i className="ri-download-line bg-slate-900 p-1 rounded-full"></i></button>
              <button className='   bg-indigo-600  text-sm shadow-xl rounded-3xl px-5 py-2'>Connect <i className="ri-message-line bg-slate-900 p-1 rounded-full"></i></button>
            </div> */}
        </div>
        <div className='w-36 h-36 border-green-500  shadow-lg absolute left-20 rounded-full overflow-hidden bg-orange-500 top-24'>
            <img className='' src="https://avatars.githubusercontent.com/u/123270037?v=4" alt="" />
        </div>
        <div className=' absolute left-20   bottom-2'>
            <h1 className='text-[1.5rem] font-medium font-poppins text-lg' >Abhishek Chauhan</h1>
            <p className='text-[1.1rem] text-red-400'><span className=' tracking-widest text-lg '> MERN</span>  Developer</p>
        </div>
    </div>
    </>
  )
}

export default Profile
