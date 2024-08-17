<script>
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import ScrollableSection from "$lib/components/ScrollableSection.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    
    export let data;

    let isVisible = false;

    onMount(() => {
        setTimeout(()=>{
            isVisible = true;
        }, 500)
    })
</script>

<div id="home-slot" class="h-full w-full">
    <ScrollableSection sectionName="home-section" nextSectionName="about-section">
        <article class="grid grid-rows-9 h-full w-full">
            <div class="row-span-6 flex justify-center items-center h-full w-full my-5">
                {#if isVisible}
                <img class="framed h-full w-fit object-contain" transition:fly="{{y:100, duration: 1000}}" src="/images/tlv1.jpg" alt="Yoel Buzgalo sitting in Tel Aviv with laptop"/>
                {/if}
            </div>
            <div class="row-span-3 flex w-full justify-center items-center flex-row">
                <h1 class="text-xl w-fit">Hi there! My name is <strong>Yoel B. Buzgalo</strong> and I am a&nbsp;</h1>
                <div class="w-fit bg-black bg-opacity-50 rounded-sm text-xl">
                    <h1>Software Engineer</h1>
                    <div class="green-line"></div>
                </div>
            </div>
        </article>
    </ScrollableSection>
    <ScrollableSection sectionName="about-section" nextSectionName={null}>
        <h1 class="text-xl underline mb-5">Timeline Overview:</h1>
        <Timeline timelineData={data.timeline}/>
    </ScrollableSection>
</div>