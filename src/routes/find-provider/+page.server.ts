import { PUBLIC_MARKER_LOAD_URL } from '$env/static/public';
import type { MarkerPoint } from '$lib/types/MarkerPoint.js';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const res = await fetch(`${PUBLIC_MARKER_LOAD_URL}`, {
        method: 'GET'
    });

    const markers: MarkerPoint[] = await res.json();

    return { 
        markers: markers 
    };
}) satisfies PageServerLoad