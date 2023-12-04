'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import ARROW_BACK from '@/assets/arrow.svg'
import SEND from '@/assets/send.svg'

export default function Page() {
  const [message, setMessage] = useState('')

  const { replace } = useRouter()

  const handleBack = () => {
    replace('/list')
  }

  const handleSendMessage = () => {
    if (message.length < 1) return
    // alert(message)
    setMessage('')
  }

  return (
    <div className='w-80 h-[448px] bg-dark-gray rounded-lg flex flex-col p-4'>
      <div className='w-full mb-3 flex gap-4 items-center'>
        <div className='cursor-pointer' onClick={handleBack}>
          <Image src={ARROW_BACK} alt='Voltar' />
        </div>
        <div className='w-8 h-8 rounded-full bg-light-gray-100' />
        <span className='w-auto'>Alexandre</span>
      </div>
      <div className='h-80 border border-transparent border-y-light-gray-600 py-3 flex flex-col gap-3'>
        <div className='min-h-[32px] w-60 bg-light-gray-100 rounded-lg text-[10px] px-2 py-1 text-dark-gray'></div>
        <div className='min-h-[32px] w-60 bg-primary rounded-lg text-[10px] self-end px-2 py-1'></div>
      </div>
      <div className='w-full flex justify-between pt-3'>
        <textarea id='inputMessage' value={message} className='w-56 h-8 bg-light-gray-200 rounded-lg resize-none px-2 text-[10px] py-1' onChange={(e: any) => setMessage(e.target.value)} />
        <button className='h-8 w-8 bg-primary rounded-full flex justify-center items-center' onClick={handleSendMessage}>
          <Image src={SEND} alt='Enviar'  />
        </button>
      </div>
    </div>
  )
}