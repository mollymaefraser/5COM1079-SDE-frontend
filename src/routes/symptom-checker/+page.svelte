<script lang="ts">
    import { MultiSelect, Button, Heading, P, Span } from 'flowbite-svelte'
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import { PUBLIC_SYMPTOM_SEND_URL } from '$env/static/public';
    import type { DiagnosisReturn } from '$lib/types/diagnosisReturn';

    let symptomsChosen: string[] = []
    let symptomsToChoose: any
    let diagnosisReturn: DiagnosisReturn[] = []


    $:diagnosis = ""
    $:description = ""
    $:advice = ""
    $:diagnosisReturn.forEach((element) => {
        let tempStrCondition = ` or ${element.condition}`
        let tempStrAdvice =  ` or ${element.advice}`
        let tempStrDescription = ` or ${element.description}`
        diagnosis = diagnosis.concat(diagnosis, tempStrCondition)
        description = description.concat(description, tempStrDescription)
        advice = advice.concat(advice, tempStrAdvice)
    })

    let data: PageData

    onMount(async () => {
        data.symptoms.forEach( (element: string) => {
            symptomsToChoose.push({val: {element}, name: {element}})
        });
    });

    const submitSymptoms = async() => {
        const res = await fetch(`${PUBLIC_SYMPTOM_SEND_URL}`, {
        method: 'POST'
        });

        diagnosisReturn = await res.json();
    }
</script>

<div  class="text-center">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"><Span gradient>Symptom Checker</Span></Heading>
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Simply select the symptoms below that you are suffering from in order to recieve a predictive diagnosis.</P>
</div>

<div class="condition-result">
    <Heading tag="h2">Your condition(s): {diagnosis}</Heading>
    <p>Condition description(s): {description}</p>
    <p>Condition advice: {advice}</p>
</div>

<div class="symptoms">
    <MultiSelect items={symptomsToChoose} bind:value={symptomsChosen} />
</div>

<div class="submitter">
    <Button on:click={submitSymptoms}>Submit</Button>
</div>



<style>
   .text-center{
        text-align: center;
        padding: 70px;
    }

    .condition-result{
        padding: 70px;
    }
    .submitter{
        padding: 70px;
        text-align: center;
    }
</style>