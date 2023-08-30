import type { Illness } from "./illness"
import type { SymptomLoader } from "./symptomLoader"

export type PredictionReturn = {
    illness: Illness,
    symptoms: SymptomLoader[]
}