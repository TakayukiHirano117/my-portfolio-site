import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between h-16 items-center px-8 text-slate-50 sticky top-0">
            <h1 className="font-black text-lg text-white drop-shadow-lg">BlueZz&apos;s portfolio</h1>
            <nav>
                <ul className="flex gap-4 ">
                    {/* map使うように修正する */}
                    <li>
                        <Link href="/about" className='drop-shadow-lg hover:text-slate-800 duration-300'>About Me</Link>
                    </li>
                    <li>
                        <Link href="/projects" className='drop-shadow-lg hover:text-slate-800 duration-300'>Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className='drop-shadow-lg hover:text-slate-800 duration-300'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header