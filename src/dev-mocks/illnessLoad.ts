import type { Illness } from '$lib/types/illness'
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/illness-loader',
    method: 'get',
    timeout: 2000,
    response: () => [
        {
            name: "name1",
            description: "description1",
            advice: "advice1",
            symptoms: ["a", "b", "c"]
        },
        {
            name: "name2",
            description: "description2",
            advice: "advice2",
            symptoms: ["c", "d", "e"]
        },
        {
            name: "name3",
            description: "description3",
            advice: "advice3",
            symptoms: ["f", "g", "h"]
        },
    ] as Illness[]
  }
] as MockMethod []