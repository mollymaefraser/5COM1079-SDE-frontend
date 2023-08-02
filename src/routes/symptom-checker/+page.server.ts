export async function load({ fetch }) {
    const res = await fetch(`/toms/api/route`);
    const item = await res.json();

    return { item };
}