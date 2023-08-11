import { PUBLIC_MARKER_LOAD_URL, PUBLIC_SYMPTOM_LOAD_URL } from "$env/static/public";
import type { MarkerPoint } from "$lib/types/MarkerPoint";
import type { LayoutData, LayoutServerLoad } from "./$types";

export const load = (async () => {
    const mark = await fetch(`${PUBLIC_MARKER_LOAD_URL}`, {
        method: 'GET'
    });

    const markers: MarkerPoint[] = await mark.json();

    const symp = await fetch(`${PUBLIC_SYMPTOM_LOAD_URL}`, {
        method: 'GET'
    });

    const symptoms: string[] = await symp.json();

    return { 
        symptoms: symptoms,
        markers: markers
    };
}) satisfies LayoutServerLoad