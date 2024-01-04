import React from 'react'
import {AiOutlineSearch } from 'react-icons/ai';
import "./Navbar.css"
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';
function Navbar(){
     const dispatch=useDispatch();
     return(
         <div className='body'>
        <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-8">
        <div>
        <h1 className="text-3xl font-bold ml-auto text-slate-700 hover:text-orange-700">Marigold Foods</h1>
          <h3 className="text-base font-bold ml-1 text-yellow-700 hover:text-slate-700">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
        </div>
        <div className='flex'>
          <AiOutlineSearch size={36} className='mt-0.7 h-10 w-10 items-center border bg-yellow-500'/>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here"
            autoComplete="off"
            onChange={(e)=>dispatch(setSearch(e.target.value))}
            className="p-3 border border-gray-400 text-lg rounded-tr rounded-br focus:outline-none h-10 w-full lg:w-[25vw]"
          />
        </div>
      </nav>
      </div>
     )
}
export default Navbar;