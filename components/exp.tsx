"use client"

import React from "react"
import Image from "next/image"
import { experienceData } from "@/lib/data"

type ExpProps = typeof experienceData[number]

export default function Exp({ title, position, icon, date }: ExpProps) {
    return (
        <section className="flex relative justify-center m-4">
            <div className="hidden sm:flex items-start w-44 pt-0.5 relative">
                <div className="w-full text-gray-900 text-sm pt-[1.4rem]">{date}</div>
                <div className="bg-[#c2afa1] w-px h-[45%] translate-x-[2.66rem] translate-y-[1rem] mt-[5rem]"></div>

                <div className="w-[10rem] h-[10rem] rounded-full z-20">
                    <Image className="rounded-full" src={icon} alt="MJ" height="400" width="400" quality="95" priority={true} />
                </div>
            </div>

            <div className="rounded-lg px-8 pb-4 pt-4 sm:pt-2 w-full text-center z-10 sm:w-96">
                <div className="text-xl font-medium mb-2">{title}</div>
                <div className="text-black mb-4 sm:mb-6 flex flex-col">
                    {position} <span className="sm:hidden font-normal">{date}</span>
                </div>

                <div className="w-[3rem] h-[3rem] rounded-full z-20 absolute left-2 top-2 sm:hidden">
                    <Image className="rounded-full" src={icon} alt="MJ" height="400" width="400" quality="95" priority={true} />
                </div>
            </div>
        </section>
    )
}
