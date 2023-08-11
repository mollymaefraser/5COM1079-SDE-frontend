import { PUBLIC_MARKER_LOAD_URL } from '$env/static/public';
import type { MarkerPoint } from '$lib/types/MarkerPoint.js';

export async function load({ fetch }) {
    const res = await fetch(`${PUBLIC_MARKER_LOAD_URL}`, {
        method: 'GET'
    });

    const markers: MarkerPoint[] = await res.json();

    return { markers };
}