<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { PUBLIC_SYMPTOM_URL } from "$env/static/public";
    import user from "$lib/types/user";
    import { Label, Input, Button, Heading, Span, P, Toast } from "flowbite-svelte";
    import { Icon } from "flowbite-svelte-icons";
    let symptom: String;
    let errorMessage: String | Error;

    const submitSymptom = async () => {
        const res = await fetch(`${PUBLIC_SYMPTOM_URL}/CreateSymptom`, {
            method: "POST",
            body: JSON.stringify(symptom),
        });

        if (res.status != 201) {
            errorMessage =
                "Failed to add symptom. Please try again. If the problem persists, contact support.";
        }
    };

    const fireRedirect = async () => {
        if (browser) {
            goto("/");
        }
    };
</script>

<div class="error-banner">
    {#if errorMessage}
        <Toast>
            <svelte:fragment slot="icon">
                <Icon name="close-circle-solid" class="w-5 h-5" />
                <span class="sr-only">Error icon</span>
            </svelte:fragment>
            <p>{errorMessage}</p>
        </Toast>
    {/if}
</div>

<br />

{#if $user.isUserAdmin == true}
    <div class="text-center">
        <Heading
            tag="h1"
            class="mb-4"
            customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
            ><Span gradient>Symptom Adder</Span></Heading
        >
        <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            >Simply enter the symptom you would like to add. These will then be
            available for our clients to select and help diagnose.</P
        >
    </div>

    <div class="mb-6">
        <Label for="symptom-input" class="block mb-2">Add a Symptom</Label>
        <Input id="symptom-input" placeholder="Coughing" bind:value={symptom} />
    </div>

    <div class="submitter">
        <Button color="light" on:click={submitSymptom}>Submit</Button>
    </div>
{:else}
    <p hidden>{fireRedirect()}</p>
{/if}

<style>
    .mb-6 {
        max-width: 40%;
        text-align: center;
        margin: auto;
    }
    .submitter {
        padding: 50px;
        text-align: center;
    }
</style>
