import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/symptom-loader',
    method: 'get',
    timeout: 2000,
    response: () => ([
      "symptom1",
      "symptom2",
      "symptom3",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ])
  }
] as MockMethod []