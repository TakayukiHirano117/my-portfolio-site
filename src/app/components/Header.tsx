import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between h-16 bg-[#334155] items-center px-4 text-slate-50">
            <h1 className="font-black text-lg text-white opacity-100">BlueZz&apos;s portfolio</h1>
            <nav>
                <ul className="flex gap-4 ">
                    <li>
                        <Link href="/about">About Me</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header