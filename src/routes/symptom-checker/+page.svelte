<script lang="ts">
    import { MultiSelect, Button, Heading, P, Span } from 'flowbite-svelte'
    import { onMount } from 'svelte';
    import { PUBLIC_SYMPTOM_SEND_URL } from '$env/static/public';
    import type { DiagnosisReturn } from '$lib/types/diagnosisReturn';
    import type { SelectOptionType } from 'flowbite-svelte/dist/types';
    import type { LayoutData } from '../$types';

    let symptomsChosen: string[] = []
    let symptomsToChoose: SelectOptionType[] = []
    let diagnosisReturn: DiagnosisReturn[] = []


    $:diagnosis = ""
    $:description = ""
    $:advice = ""

    $: for(let i=0; i<diagnosisReturn.length; i++) {
        let tempStrCondition = ""
        let tempStrAdvice = ""
        let tempStrDescription = ""
        if(i == 0){
            tempStrCondition = `${diagnosisReturn[i].condition}`
            tempStrAdvice =  `${diagnosisReturn[i].advice}`
            tempStrDescription = ` ${diagnosisReturn[i].description}`
        }else{
            tempStrCondition = ` or ${diagnosisReturn[i].condition}`
            tempStrAdvice =  ` or ${diagnosisReturn[i].advice}`
            tempStrDescription = ` or ${diagnosisReturn[i].description}`
        }

        diagnosis += tempStrCondition
        description += tempStrDescription
        advice +=tempStrAdvice
    }

    export let data: LayoutData 

    onMount(async () => {
        data.symptoms.forEach( (val: string) => {
            symptomsToChoose.push({value: `${val}1`, name: `${val}`})
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