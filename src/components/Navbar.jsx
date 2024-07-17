import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=" navbar flex justify-between shadow-sm shadow-rgba(0,0,0,0.3) bg-black text-yellow-500 items-center px-5">
      <h1 className="text-center text-3xl pt-5 font-semibold mb-5">
          iTodos
        </h1>
      <div className="links flex gap-4 text-normal">
        <Link to={"/"} className=' hover:bg-yellow-500 hover:text-slate-950 hover:rounded-xl transition-all duration-300 ease-in-out border border-transparent hover:border px-3' >Home</Link>
        <Link to= {"/todos"} className=' hover:bg-yellow-500 hover:text-slate-950 hover:rounded-xl transition-all duration-300 ease-in-out border border-transparent hover:border px-3' >Todos</Link>
        <Link to={"/make"} className=' hover:bg-yellow-500 hover:text-slate-950 hover:rounded-xl transition-all duration-300 ease-in-out border border-transparent hover:border px-3' >Add todo</Link>
      </div>
    </nav>
  )
}

export default Navbar