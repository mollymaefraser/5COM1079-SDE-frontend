<script lang="ts">
    import { MultiSelect, Button, Heading, P, Span } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { PUBLIC_SYMPTOM_SEND_URL } from "$env/static/public";
    import type { DiagnosisReturn } from "$lib/types/diagnosisReturn";
    import type { SelectOptionType } from "flowbite-svelte/dist/types";
    import type { LayoutData } from "../$types";
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import loggedInStore from "$lib/types/loggedInStore";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import type { PredictionReturn } from "$lib/types/predictionReturn";

    let symptomsChosen: string[] = [];
    let symptomsToChoose: SelectOptionType[] = [];
    let diagnosisReturn: PredictionReturn[] = [];

    $: diagnosis = "";
    $: description = "";
    $: advice = "";

    $: for (let i = 0; i < diagnosisReturn.length; i++) {
        let tempStrCondition = "";
        let tempStrAdvice = "";
        let tempStrDescription = "";
        if (i == 0) {
            tempStrCondition = `${diagnosisReturn[i].illness.illnessName}`;
            tempStrAdvice = `${diagnosisReturn[i].illness.illnessAdvice}`;
            tempStrDescription = ` ${diagnosisReturn[i].illness.illnessDescription}`;
        } else {
            tempStrCondition = ` or ${diagnosisReturn[i].illness.illnessName}`;
            tempStrAdvice = ` or ${diagnosisReturn[i].illness.illnessAdvice}`;
            tempStrDescription = ` or ${diagnosisReturn[i].illness.illnessDescription}`;
        }

        diagnosis += tempStrCondition;
        description += tempStrDescription;
        advice += tempStrAdvice;
    }

    export let data: LayoutData;

    onMount(async () => {
        data.symptoms.forEach((val) => {
            symptomsToChoose.push({ value: `${val.symptomName}1`, name: `${val.symptomName}` });
        });
    });

    const submitSymptoms = async () => {
        const res = await fetch(`${PUBLIC_SYMPTOM_SEND_URL}`, {
            method: "POST",
        });

        console.log(res.json())

        diagnosisReturn = await res.json();
    };

    const fireRedirect = async () => {
        if(browser){
            goto("/login")
        }
    };
</script>

<div class="error-message">
    {#if data.errorMessages.symp}
        <ErrorBanner ErrorMessage={data.errorMessages.symp} />
    {/if}
</div>

<br />

{#if $loggedInStore == true}
    <div class="text-center">
        <Heading
            tag="h1"
            class="mb-4"
            customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
            ><Span gradient>Symptom Checker</Span></Heading
        >
        <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            >Simply select the symptoms below that you are suffering from in
            order to recieve a predictive diagnosis.</P
        >
    </div>

    <div class="condition-result">
        <Heading tag="h2">Your condition(s): {diagnosis}</Heading>
        <p>Condition description(s): {description}</p>
        <p>Condition advice: {advice}</p>
    </div>

    <div class="symptoms">
        <MultiSelect dropdownClass="!dark:bg-gray-50 hover:text-black bg-gray-50" class="!dark:bg-gray-50 bg-gray-50 hover:text-black" items={symptomsToChoose} bind:value={symptomsChosen} />
    </div>

    <div class="submitter">
        <Button color="light" on:click={submitSymptoms}>Submit</Button>
    </div>
{:else}
    <p hidden>{fireRedirect()}</p>
{/if}

<style>
    .text-center {
        text-align: center;
        padding: 70px;
    }

    .condition-result {
        padding: 70px;
    }

    .symptoms{
        padding-left: 10%;
        padding-right: 10%;
    }
    
    .submitter {
        padding-top: 40px;
        padding-bottom: 100px;
        text-align: center;
        margin-bottom: 60px;
    }
</style>
