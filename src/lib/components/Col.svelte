<script lang="ts">
    export let xs: number | "auto" | null = 16;
    export let md: number | "auto" | null;
    export let lg: number | "auto" | null;
</script>

<div class={`col-${xs} ${md ? `col-md-${md}` : "" } ${lg ? 'col-lg-${lg}' : "" }`}>
<slot/>
</div>