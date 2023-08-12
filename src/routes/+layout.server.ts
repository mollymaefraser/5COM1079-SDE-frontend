import { PUBLIC_MARKER_LOAD_URL, PUBLIC_SYMPTOM_LOAD_URL } from "$env/static/public";
import type { MarkerPoint } from "$lib/types/MarkerPoint";
import type { LayoutServerLoad } from "./$types";

let errorMessageMark: any;
let errorMessageSymp: any;

export const load = (async () => {
    const mark = await fetch(`${PUBLIC_MARKER_LOAD_URL}`, {
        method: 'GET'
    });

    if (mark.status != 200){
        errorMessageMark = "Failed to load locations. Please refresh and try again. If the problem persists, contact support."
    }

    const markers: MarkerPoint[] = await mark.json();

    const symp = await fetch(`${PUBLIC_SYMPTOM_LOAD_URL}`, {
        method: 'GET'
    });

    if (symp.status != 200){
        errorMessageSymp = "Failed to load symptom options. Please refresh and try again. If the problem persists, contact support."
    }

    const symptoms: string[] = await symp.json();

    return { 
        symptoms: symptoms,
        markers: markers,
        errorMessages: {
            mark: errorMessageMark,
            symp: errorMessageSymp
        },
    };
}) satisfies LayoutServerLoad