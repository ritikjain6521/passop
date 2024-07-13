import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-slate-800 text-white tx-2xl'>
        <div className=" my-button flex justify-between items-center px-4 py-5 h-14">
        <div className='logo font-bold text-white'>
        <span class='text-green-700' >/&lt;</span> 
         <span>Pass</span><span class='text-green-700' >OP/&gt;</span>         
          </div>  
        <ul>
          {/*<li className='flex gap-4'>
                <a className='hover:font-bold'href='/'>Home</a>
                <a className='hover:font-bold' href='/'>About</a>
                <a className='hover:font-bold'href='/'>contact</a>

            </li> */}
        </ul>
        <button className='text-white bg-green-700 my-5 rounded-full flex justify-center items-center ring-white ring-2'>

          <img className='invert p-1 w-10' src="icons/github.svg" alt="github logo" />
          <span className='font-bold px-2'> Github</span>
        </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
