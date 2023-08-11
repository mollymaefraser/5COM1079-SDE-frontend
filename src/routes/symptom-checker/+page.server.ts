import { PUBLIC_SYMPTOM_LOAD_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';


export const load = (async () => {
    const res = await fetch(`${PUBLIC_SYMPTOM_LOAD_URL}`, {
        method: 'GET'
    });

    const symptoms: string[] = await res.json();

    return { 
        symptoms: symptoms 
    };
}) satisfies PageServerLoad