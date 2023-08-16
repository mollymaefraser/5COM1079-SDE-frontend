<script lang="ts">
    import { goto } from "$app/navigation";
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import { Label, Input, Button, Heading, Span, P, MultiSelect } from "flowbite-svelte";
    import type { SelectOptionType } from "flowbite-svelte/dist/types";
    import type { LayoutData } from "../../$types";
    import { onMount } from "svelte";
    import { PUBLIC_ILLNESS_ADD_URL } from "$env/static/public";
    let name: String;
    let advice: String;
    let description: String;
    let errorMessage: String | Error;
    let symptomsChosen: string[] = [];
    let symptomsToChoose: SelectOptionType[] = [];
    export let data: LayoutData;

    onMount(async () => {
        data.symptoms.forEach((val: string) => {
            symptomsToChoose.push({ value: `${val}1`, name: `${val}` });
        });
    });

    const submitIllness = async () => {
        const res = await fetch(`${PUBLIC_ILLNESS_ADD_URL}`, {
            method: "POST",
            body: JSON.stringify({
                name: {name},
                description: {description},
                advice: {advice},
                symptoms: {symptomsChosen}
            }),
        });

        if (res.status != 200) {
            errorMessage =
                "Failed to add Illness. Please refresh and try again. If the problem persists, contact support.";
        }

        goto("/")
    };
</script>

<div class="error-banner">
    {#if errorMessage}
        <ErrorBanner
            ErrorMessage="Illness add has failed. Please try again. Contact support if the issue persists."
        />
    {/if}
</div>

<br>

<div class="text-center">
    <Heading
        tag="h1"
        class="mb-4"
        customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
        ><Span gradient>Illness Adder</Span></Heading
    >
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >Simply enter the illness you would like to add. These will then be available for our clients to select and help diagnose.</P
    >
</div>

<div class="mb-6">
    <Label for="illness-input" class="block mb-2">Add an Illness</Label>
    <Input id="name-input" placeholder="Name" bind:value={name} />
    <Input id="description-input" placeholder="Description" bind:value={description} />
    <Input id="advice-input" placeholder="Advice" bind:value={advice} />
    <div class="symptoms">
        <MultiSelect items={symptomsToChoose} bind:value={symptomsChosen} />
    </div>
</div>

<div class="submitter">
    <Button on:click={submitIllness}>Submit</Button>
</div>

<style>
    .mb-6{
        max-width: 40%;
        text-align: center;
        margin: auto;
    }
    .submitter{
        padding: 50px;
        text-align: center;
    }
</style>
