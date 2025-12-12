import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <nav className="flex items-center justify-between flex-wrap py-4 lg:px-12 shadow border-solid border-t-2" style={{ backgroundColor: '#253047ff', borderTopColor: '#66c0f4' }}>
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 mr-16" style={{ color: '#d1d3d3dc', fontFamily: 'FF Din OT Bold' }}>
                    <Link href="/"><img alt="gallery" className="h-15 w-15" src="/assets/xbox.png" /></Link>
                    <Link href="/"><span  className="font-bold text">Game Engine</span></Link>
                </div>
                <div className="block lg:hidden ">
                    <button
                        id="nav"
                        className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div className="text-md font-bold text-blue-700 lg:flex-grow">
                    
                    {/* Dropdown for Menu 3 */}
                    <div ref={dropdownRef} className="relative inline-block text-left">
                       <button
                            onClick={() => setOpen(!open)}
                            aria-haspopup="true"
                            aria-expanded={open}
                            className={`block mt-4 lg:inline-flex lg:items-center lg:mt-0 px-4 py-2 rounded mr-2 font-bold ${
                                open ? 'text-white' : 'hover:text-white'
                            }`}
                            style={{ backgroundColor: open ? '#00adee' : 'transparent', color: open ? 'white' : '#29edb6ff', fontFamily:'Comic Sans MS' }}>
                            
                            Browse
                            <svg className="ml-2 h-4 w-4 inline-block" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {open && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 z-20" style={{backgroundColor:'#ebe8f4ac'}}>
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="/sales" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-700 hover:text-white" role="menuitem">Sale and Discount</a>
                                    <a href="/ponschoice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-700 hover:text-white" role="menuitem">Pons Choice</a>
                                    <a href="/genre" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-700 hover:text-white" role="menuitem">Genre</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-2"
                    style={{ backgroundColor: '#253047ff', color: '#29edb6ff', fontFamily:'Comic Sans MS' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#00adee'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#253047ff'}>About</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded mr-2"
                    style={{ backgroundColor: '#253047ff', color: '#29edb6ff', fontFamily:'Comic Sans MS' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#00adee'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#253047ff'}>Support</a>
                </div>
                <div className="relative mx-auto text-gray-600 lg:block hidden">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="looking for a game?"
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
                <div className="flex ">
                    <a href="#" className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0 "style={{ color: '#d1d3d3dc', fontFamily: 'Comic Sans MS' }}>
                        Sign in
                    </a>
                    <a href="#" className="block text-md px-4 ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0" style={{ color: '#d1d3d3dc', fontFamily: 'Comic Sans MS' }}>
                        login
                    </a>
                </div>
            </div>
        </nav>
    )
}
