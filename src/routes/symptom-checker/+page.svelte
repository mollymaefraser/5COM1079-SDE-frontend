<script lang="ts">
    import { MultiSelect, Button, Heading, P, A, Mark, Secondary, Span } from 'flowbite-svelte'
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    let symptomsChosen = []
    let symptomsToChoose = []
    $:diagnosis = "Unknown"

    let data: PageData

    onMount(async () => {
        data.symptomList.forEach( (element) => {
            symptomsToChoose.push({value: element, name: element})
        });
    });
</script>

<div  class="text-center">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"><Span gradient>Symptom Checker</Span></Heading>
    <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Simply select the symptoms below that you are suffering from in order to recieve a predictive diagnosis.</P>
</div>

<div class="diagnosis">
    <Heading tag="h2">Your condition: {diagnosis}</Heading>
</div>

<div class="symptoms">
    <MultiSelect items={symptomsToChoose} bind:value={symptomsChosen} />
</div>

<div class="submitter">
    <Button>Submit</Button>
</div>



<style>
   .text-center{
        text-align: center;
        padding: 70px;
    }

    .diagnosis{
        padding: 70px;
    }
    .submitter{
        padding: 70px;
        text-align: center;
    }
</style>