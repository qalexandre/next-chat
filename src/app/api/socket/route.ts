import type { Server as HTTPServer } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Socket as NetSocket } from 'net'
import { Server as IOServer } from 'socket.io'

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined
}

interface SocketWithIO extends NetSocket {
  server: SocketServer
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO
}

export const dynamic = 'force-dynamic'

export const GET = (_: any, res: NextApiResponseWithSocket) => {
  if (res.socket?.server?.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new IOServer(res.socket?.server!, { path: '/api/socket' })
    // res.socket.server.io = io
  }
  res.end()

}

// export default SocketHandler