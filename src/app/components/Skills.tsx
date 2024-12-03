import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
    // altつける。
    const imageSrc = [
        {
            id: 1,
            src: "docker-icon.png"
        },
        {
            id: 2,
            src: "git-icon.png"
        },
        {
            id: 3,
            src: "nextjs-icon.png"
        },
        {
            id: 4,
            src: "react-js-icon.png"
        },
        {
            id: 5,
            src: "tailwind-css-icon.svg"
        },
        {
            id: 6,
            src: "typescript-programming-language-icon.png"
        },
        {
            id: 7,
            src: "php-programming-language-icon.png"
        },
        {
            id: 8,
            src: "supabase-seeklogo.svg"
        },
        {
            id: 9,
            src: "prisma-3.svg"
        },
        {
            id: 10,
            src: "javascript-programming-language-icon.png"
        },
        {
            id: 11,
            src: "node-js-icon.svg"
        },
        {
            id: 12,
            src: "laravel-icon.png"
        },
    ]
    return (
        <div className='bg-skills-gradient'>
            <div className='flex flex-col gap-8 items-center max-w-[1080px] mx-auto p-8 '>
                <h2 className='font-bold text-5xl text-slate-50 drop-shadow-lg' id="skills">Skills</h2>
                <div className='grid md:grid-cols-4 sm:grid-cols-3 place-items-center gap-8 w-full'>
                    {
                        imageSrc.map((item) => (
                            <Card key={item.id} className='w-52 h-52 flex justify-center items-center bg-slate-50'>
                                <Image src={`/${item.src}`} width={150} height={150} alt=''></Image>
                            </Card>
                        ))
                    }
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}

export default Skills