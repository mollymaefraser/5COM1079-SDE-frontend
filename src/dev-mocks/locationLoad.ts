import type { LocationLoad } from '$lib/types/LocationLoad'
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
            name: "location 1",
            address: "address 1",
            email: "email 1",
            telephone: 1233
        },
        {
            longitude: 5.53905,
            latitude: 55.751744,
            name: "location 2",
            address: "address 2",
            email: "email 2",
            telephone: 1233
        }
    ] as LocationLoad[]
  }
] as MockMethod []