'use client'

import { useState } from "react"

import LOGO from '@/assets/logo.svg'
import Image from "next/image"

export default function Home() {
  const [name, setName] = useState('')


  return (
   <div className='w-80 h-[448px] bg-dark-gray rounded-lg flex flex-col justify-center items-center gap-4'>
      <Image src={LOGO} alt="Logo NextChat" />

      <input className="mt-10 w-56 h-8 bg-light-gray-100 px-3 py-2 rounded-lg outline-none text-dark-gray placeholder:text-dark-gray font-semibold text-[10px]" placeholder="Nome" />
      <button className="w-56 h-8 bg-primary text-center rounded-lg font-semibold">Entrar</button>
   </div>
  )
}
