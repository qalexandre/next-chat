'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import MESSAGE from '@/assets/message.svg'
import ARROW_BACK from '@/assets/arrow.svg'

export default function Page() {

  const { replace } = useRouter()

  const handleBack = () => {
    replace('/')
  }

  const handleChat = (id: string) => {
    replace('/chat/'+id)
  }

  return (
    <div className='w-80 h-[448px] bg-dark-gray rounded-lg flex flex-col p-4'>
      <div className='w-full mb-6 cursor-pointer' onClick={handleBack}>
        <Image src={ARROW_BACK} alt='Voltar' />
      </div>
      <div className='divide-solid divide-light-gray-600 divide-y border border-transparent border-t-light-gray-600'>
        <div className='py-4 flex items-center justify-between px-2'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 rounded-full bg-light-gray-100' />
            <span className='w-auto'>Alexandre</span>
          </div>
          <Image src={MESSAGE} alt='Mensagem' className='cursor-pointer' onClick={() => handleChat('21')} />
        </div>
        <div className='py-4 flex items-center justify-between px-2'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 rounded-full bg-light-gray-100' />
            <span className='w-auto'>Alexandre</span>
          </div>
          <Image src={MESSAGE} alt='Mensagem' className='' />
        </div>
      </div>
    </div>
  )
}