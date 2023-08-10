import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/api/symptom-loader',
    method: 'get',
    response: () => ([
      "symptom1",
      "symptom2",
    ])
  }
] as MockMethod []