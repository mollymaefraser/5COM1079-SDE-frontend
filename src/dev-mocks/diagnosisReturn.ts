import type { DiagnosisReturn } from '$lib/types/diagnosisReturn'
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/mock/diagnosis',
    method: 'post',
    response: () => [
        {
            condition: 'condition',
            description: 'description',
            advice: 'advice'
        },
        {
            condition: 'condition2',
            description: 'description2',
            advice: 'advice2'
        }
    ] as DiagnosisReturn[]
  }
] as MockMethod []