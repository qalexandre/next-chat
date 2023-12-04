'use client'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SocketProvider } from '@/hooks/socket'
import io, { Socket } from 'socket.io-client'
import { useEffect } from 'react'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

let socket: Socket

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => { socketInitializer() }, [])

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })
  }
  return (
    <html lang="en">
      <SocketProvider socketProp={socket}>
        <body className={' flex justify-center items-center w-screen h-screen'}>{children}</body>
      </SocketProvider>
    </html>
  )
}
