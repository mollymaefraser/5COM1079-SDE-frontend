<script lang="ts">
    import { goto } from "$app/navigation";
    import {
        Label,
        Input,
        Button,
        Heading,
        Span,
        P,
        MultiSelect,
        Toast,
    } from "flowbite-svelte";
    import type { SelectOptionType } from "flowbite-svelte/dist/types";
    import { onMount } from "svelte";
    import { PUBLIC_ILLNESS_ADD_URL, PUBLIC_SYMPTOM_LOAD_URL } from "$env/static/public";
    import { browser } from "$app/environment";
    import { Icon } from "flowbite-svelte-icons";
    import user from "$lib/types/user";

    let name: String;
    let advice: String;
    let description: String;
    let errorMessage: String | Error;
    let symptomsChosen: string[] = [];
    let symptomsToChoose: SelectOptionType[] = [];

    onMount (async () => {
        const symp = await fetch(`${PUBLIC_SYMPTOM_LOAD_URL}`, {
            method: 'GET'
        });

        if (symp.status != 200){
            errorMessage = "Failed to load symptom options. Please refresh and try again. If the problem persists, contact support."
        }

        let symptoms = await symp.json();

        symptoms.forEach((val: any) => {
            symptomsToChoose.push({
                value: `${val.symptomName}`,
                name: `${val.symptomName}`,
            });
        });
    })

    const submitIllness = async () => {
        const res = await fetch(`${PUBLIC_ILLNESS_ADD_URL}`, {
            method: "POST",
            body: JSON.stringify({
                name: { name },
                description: { description },
                advice: { advice },
                symptoms: { symptomsChosen },
            }),
        });

        if (res.status != 201) {
            errorMessage =
                "Failed to add Illness. Please refresh and try again. If the problem persists, contact support.";
        }

        goto("/");
    };

    const fireRedirect = async () => {
        if(browser){
            goto("/")
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
            ><Span gradient>Illness Adder</Span></Heading
        >
        <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            >Simply enter the illness you would like to add. These will then be
            available for our clients and will help provide an accurate
            diagnosis.</P
        >
    </div>

    <div class="mb-6">
        <Label for="illness-input" class="block mb-2">Add an Illness</Label>
        <Input id="name-input" placeholder="Name" bind:value={name} />
        <Input
            id="description-input"
            placeholder="Description"
            bind:value={description}
        />
        <Input id="advice-input" placeholder="Advice" bind:value={advice} />
        <div class="symptoms">
            <MultiSelect dropdownClass="!dark:bg-gray-50 bg-gray-50 hover:text-black" class="!dark:bg-gray-50 bg-gray-50 hover:text-black" items={symptomsToChoose} bind:value={symptomsChosen} />
        </div>
    </div>

    <div class="submitter">
        <Button color="light" on:click={submitIllness}>Submit</Button>
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
