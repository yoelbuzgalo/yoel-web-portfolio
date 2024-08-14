<script>
    import { TypeWriter } from "svelte-typewrite";
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
        <article class="grid grid-cols-9 my-5 h-full w-full">
            <div class="col-span-4">
                <h1 class="text-xl w-fit">Hi there! My name is <strong>Yoel B. Buzgalo</strong></h1>
                <h1 class="text-xl w-fit">and I'm a ...</h1>
                <div class="w-fit bg-black bg-opacity-50 rounded-sm text-xl">
                    <TypeWriter texts={["Software Engineer", "Practical Electrical Engineer"]} waitBetweenTexts=1000/>
                    <div class="green-line"></div>
                </div>
            </div>
            <div class="col-span-1 justify-center items-center"></div>
            <div class="col-span-4 justify-center items-center">
                {#if isVisible}
                <img class="framed lg:max-w-lg  md:max-sm" transition:fly="{{y:100, duration: 1000}}" src="/images/tlv1.jpg" alt="Yoel Buzgalo sitting in Tel Aviv with laptop"/>
                {/if}
            </div>
        </article>
    </ScrollableSection>
    <ScrollableSection sectionName="about-section" nextSectionName={null}>
        <Timeline timelineData={data.timeline}/>
    </ScrollableSection>
</div>