import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/login',
    method: 'post',
    statusCode: 200,
    response: () => [
      {
      isAdmin: false
      }
    ]
  }
] as MockMethod []