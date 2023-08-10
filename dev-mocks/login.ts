import { MockHandler } from 'vite-plugin-mock-server'

export default (): MockHandler[] => [
  {
    pattern: 'mock/api/login',
    method: 'get',
    handle: (req) => {
      req.statusCode = 200
    }
  }
]