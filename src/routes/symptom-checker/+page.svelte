<script lang="ts">
    import { MultiSelect, Button, Heading, P, Span, Alert, Card, Badge, Toast } from "flowbite-svelte";
    import { Icon } from 'flowbite-svelte-icons';
    import { onMount } from "svelte";
    import { PUBLIC_SYMPTOM_LOAD_URL, PUBLIC_SYMPTOM_SEND_URL } from "$env/static/public";
    import type { SelectOptionType } from "flowbite-svelte/dist/types";
    import type { LayoutData } from "../$types";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import type { PredictionReturn } from "$lib/types/predictionReturn";
    import user from "$lib/types/user";

    let symptomsChosen: string[] = [];
    let symptomsToChoose: SelectOptionType[] = [];
    let diagnosisReturn: PredictionReturn[] = [];

    let errorMessage: string = "";

    const submitSymptoms = async () => {
        const res = await fetch(`${PUBLIC_SYMPTOM_SEND_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept" : "text/plain",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(symptomsChosen),
        }).then(response => {
            if (!response.ok)
            {
                diagnosisReturn = [];
                return response.text().then(data => errorMessage = data);
            }
            else
            {
                errorMessage = "";
                return response.json().then(data => diagnosisReturn = data);
            }
        })
    };

    const fireRedirect = async () => {
        if (browser) {
            goto("/login");
        }
    };

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
</script>

<div class="error-message">
    {#if errorMessage !== ""}
    <Toast>
        <svelte:fragment slot="icon">
            <Icon name="close-circle-solid" class="w-5 h-5" />
            <span class="sr-only">Error icon</span>
        </svelte:fragment>
        <p>{errorMessage}</p>
    </Toast>
    {/if}

    {#if errorMessage !== ""}
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

<div class="h-screen grid gap-2 auto-rows-max place-items-center justify-stretch content-around">
{#if $user.userFirstName !== ""}

        <div>
        <Heading
            tag="h1"
            class="mb-12"
            customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
            ><Span gradient>Symptom Checker</Span></Heading
        >
        
        <Alert color="orange" class="font-medium">
            <Icon name="exclamation-circle-outline" slot="icon"></Icon>
            Please remember this is a predictive diagnosis based on medical data, always consult with a medical professional for further information and/or advice.
        </Alert>
        </div>
        <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            >Simply select the symptoms below that you are suffering from in
            order to recieve a predictive diagnosis.</P
        >
        {#if diagnosisReturn.length != 0}
            {#each {length: diagnosisReturn.length} as _, i}
            <Card size="xl" class="mb-6">
                {#if i == 0}
                    <Heading class="object-fill" tag="h2">Your most likely condition: {diagnosisReturn[i].illness.illnessName}</Heading>
                {:else}
                    <Heading tag="h2">Next most likely condition: {diagnosisReturn[i].illness.illnessName}</Heading>
                {/if}
                <p><b>Condition description:</b> {diagnosisReturn[i].illness.illnessDescription}</p>
                <p><b>Condition advice:</b> <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={diagnosisReturn[i].illness.illnessAdvice}>{diagnosisReturn[i].illness.illnessName} NHS Advice</a></p>
                <p><b>Symptoms matched:</b>
                    {#each diagnosisReturn[i].symptoms as symptom}
                        {#if symptomsChosen.indexOf(symptom.symptomName) > -1}
                            <Badge rounded border color="green">{symptom.symptomName}</Badge>
                        {:else}
                            <Badge rounded border color="red">{symptom.symptomName}</Badge>
                        {/if}
                    {/each}
                </p>
            </Card>
            {/each}  
        {:else if errorMessage.length != 0}
            <Alert color="red" class="font-medium object-center">
                <Icon name="exclamation-circle-outline" slot="icon"></Icon>
                {errorMessage}
            </Alert>
        
        {/if}
        <MultiSelect
            placeholder="Select symptoms here..."
            dropdownClass="dark:bg-gray-800 hover:text-black bg-gray-50"
            class="w-6/12 dark:bg-gray-800 bg-gray-50 hover:text-blue mb-6"
            items={symptomsToChoose}
            bind:value={symptomsChosen}
            size="lg"
        />

        <Button class="object-none object-center"color="light" on:click={submitSymptoms}>Submit</Button>
{:else}
    <p hidden>{fireRedirect()}</p>
{/if}
</div>
