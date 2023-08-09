export async function load({ fetch }) {
    const res = await fetch(`/toms/api/route`, {
        method: 'GET'
    });

    const symptoms: [] = await res.json();

    return { symptoms };
}