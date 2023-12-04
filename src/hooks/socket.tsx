'use client'
import { ReactNode, createContext, useState, useContext } from "react"
import { Socket } from "socket.io-client"

interface SocketContextData {
  id: string
  socket: Socket
  name: string
  setName: (name: string) => void
}

interface SocketProviderProps {
  children: ReactNode
  socketProp: Socket
}

const SocketContext = createContext({} as SocketContextData)

export function SocketProvider({ children, socketProp }: SocketProviderProps) {
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const socket = socketProp
  return (
    <SocketContext.Provider
      value={{ id, socket, name, setName }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export function useSocket() {
  const context = useContext(SocketContext)

  return context
}