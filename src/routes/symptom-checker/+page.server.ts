export async function load({ fetch }) {
    const res = await fetch(`/mock/api/symptom-loader`, {
        method: 'GET'
    });

    const symptoms: [] = await res.json();

    return { symptoms };
}