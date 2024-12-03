import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen mt-[-4rem] flex flex-col justify-center items-center bg-hero-gradient'>
            <Avatar className="w-20 h-20 ">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>Hirano</AvatarFallback>
            </Avatar>
            <h2 className="text-white text-5xl mt-2 drop-shadow-lg">Hi, I&apos;m Hirano</h2>
        </div>
    )
}

export default Hero