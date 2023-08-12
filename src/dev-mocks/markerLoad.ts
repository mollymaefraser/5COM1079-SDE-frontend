import type { MarkerPoint } from '$lib/types/MarkerPoint'
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/marker-loader',
    method: 'get',
    timeout: 2000,
    response: () => [
        {
            longitude: -0.23905,
            latitude: 48.751744,
        },
        {
            longitude: 5.53905,
            latitude: 55.751744,
        }
    ] as MarkerPoint[]
  }
] as MockMethod []