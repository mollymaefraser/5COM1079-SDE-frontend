import { PUBLIC_SYMPTOM_LOAD_URL } from '$env/static/public';

export async function load({ fetch }) {
    const res = await fetch(`${PUBLIC_SYMPTOM_LOAD_URL}`, {
        method: 'GET'
    });

    const symptoms: [] = await res.json();

    return { symptoms };
}