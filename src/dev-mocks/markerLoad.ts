import type { MarkerPoint } from '$lib/types/MarkerPoint'
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/marker-loader',
    method: 'get',
    response: () => [
        {
            longitude: -0.23905,
            latitude: 51.751744
        },
        {
            longitude: -0.53905,
            latitude: 52.751744
        }
    ] as MarkerPoint[]
  }
] as MockMethod []