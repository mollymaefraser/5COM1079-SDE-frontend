import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/symptom-loader',
    method: 'get',
    response: () => ([
      "symptom1",
      "symptom2",
    ])
  }
] as MockMethod []