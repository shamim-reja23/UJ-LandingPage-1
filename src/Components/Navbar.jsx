import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-4 px-8 " >
        <div className="flex justify-center space-x-2">
            <h1 className="text-2xl">☁️</h1>
            <h1 className="font-bold text-lg text-white" >Cloud</h1>
        </div>

        <div className="flex justify-center">
            <ul className="flex justify-center space-x-6 text-white text-sm">
                <li className="cursor-pointer hover:text-gray-200 transition-all">Products</li>
                <li className="cursor-pointer hover:text-gray-200 transition-all">Pricing</li>
                <li className="cursor-pointer hover:text-gray-200 transition-all">About</li>
                <li className="cursor-pointer hover:text-gray-200 transition-all">Blog</li>
            </ul>
        </div>

        <div className="flex justify-center text-white text-sm ">
            <button className="border px-4 py-3 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
                Sign up for free
            </button>
        </div>
    </div>
  )
}

export default Navbar