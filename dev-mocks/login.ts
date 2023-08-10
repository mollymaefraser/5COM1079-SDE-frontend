import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/api/login',
    method: 'post',
    statusCode: 200
  }
] as MockMethod []