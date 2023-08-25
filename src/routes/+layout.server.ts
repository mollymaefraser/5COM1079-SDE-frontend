import { PUBLIC_MARKER_LOAD_URL, PUBLIC_SYMPTOM_LOAD_URL, PUBLIC_ILLNESS_LOAD_URL } from "$env/static/public";
import type { LocationLoad } from "$lib/types/LocationLoad";
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

    const locations: LocationLoad[] = await mark.json();

    const symp = await fetch(`${PUBLIC_SYMPTOM_LOAD_URL}`, {
        method: 'GET'
    });

    if (symp.status != 200){
        errorMessageSymp = "Failed to load symptom options. Please refresh and try again. If the problem persists, contact support."
    }

    const symptoms: string[] = await symp.json();

    // const ill = await fetch(`${PUBLIC_ILLNESS_LOAD_URL}`, {
    //     method: 'GET'
    // });

    // if (ill.status != 200){
    //     errorMessageIll = "Failed to load illness options. Please refresh and try again. If the problem persists, contact support."
    // }

    // const illnesses: Illness[] = await ill.json();

    return { 
        symptoms: symptoms,
        locations: locations,
        errorMessages: {
            mark: errorMessageMark,
            symp: errorMessageSymp,
        },
    };
}) satisfies LayoutServerLoad