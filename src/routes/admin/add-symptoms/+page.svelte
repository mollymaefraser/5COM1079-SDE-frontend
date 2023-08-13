<script lang="ts">
    import { goto } from "$app/navigation";
    import { PUBLIC_SYMPTOM_ADD_URL } from "$env/static/public";
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import { Label, Input, Button, Heading, Span, P } from "flowbite-svelte";
    let symptom: String;
    let errorMessage: String | Error;

    const submitSymptom = async () => {
        const res = await fetch(`${PUBLIC_SYMPTOM_ADD_URL}`, {
            method: "POST",
            body: JSON.stringify(symptom),
        });

        if (res.status != 200) {
            errorMessage =
                "Failed to add symptom. Please refresh and try again. If the problem persists, contact support.";
        }

        goto("/")
    };
</script>

<div class="error-banner">
    {#if errorMessage}
        <ErrorBanner
            ErrorMessage="Symptom add has failed. Please try again. Contact support if the issue persists."
        />
    {/if}
</div>

<br>

<div class="text-center">
    <Heading
        tag="h1"
        class="mb-4"
        customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
        ><Span gradient>Symptom Adder</Span></Heading
    >
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >Simply enter the symptom you would like to add. These will then be available for our clients to select and help diagnose.</P
    >
</div>

<div class="mb-6">
    <Label for="symptom-input" class="block mb-2">Add a Symptom</Label>
    <Input id="symptom-input" placeholder="Coughing" bind:value={symptom} />
</div>

<div class="submitter">
    <Button on:click={submitSymptom}>Submit</Button>
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
