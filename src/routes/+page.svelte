<script>
    import { TypeWriter } from "svelte-typewrite";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import ScrollableSection from "../components/ScrollableSection.svelte";
    import ExpandableBox from "../components/ExpandableBox.svelte";

    export let data;

    let isVisible = false;

    onMount(() => {
        setTimeout(()=>{
            isVisible = true;
        }, 500)
    })
</script>

<div id="home-page" class="overflow-y-scroll snap-mandatory snap-y">
    <ScrollableSection sectionName="home-section" nextSectionName="about-section">
        <div class="flex flex-row justify-evenly w-full h-auto">
            <article class="article-wrapper">
                <h1 class="text-xl mb-5">Hi there! My name is <strong>Yoel B. Buzgalo</strong></h1>
                <div class="intro-wrapper">
                    <h1 class="mr-5">and I'm a ...</h1>
                    <div class="relative w-fit bg-black bg-opacity-50 rounded-sm mr-5">
                        <TypeWriter texts={["Software Engineer", "Practical Electrical Engineer"]} waitBetweenTexts=1000/>
                        <div class="shadow-sm bg-neon-green h-0.5 bottom-0 left-0 shadow-neon-green"></div>
                    </div>
                </div>
            </article>
            {#if isVisible}
                <img class="framed lg:max-w-lg md:max-w-sm" transition:fly="{{y:100, duration: 1000}}" src="/images/tlv1.jpg" alt="Yoel Buzgalo sitting in Tel Aviv with laptop"/>
            {/if}
        </div>
    </ScrollableSection>
    <ScrollableSection sectionName="about-section" nextSectionName={null}>
        <div id="timeline" class="flex flex-col items-center justify-center">
            {#each data.timeline as item, index}
                <div class="max-w7xl mx-auto w-full grid grid-cols-9 overflow-y-scroll">
                    {#if (index % 2 ==0)}
                    <div class="col-span-4 w-full">
                        <ExpandableBox data={item}/>
                    </div>
                    <div class="relative col-span-1 flex justify-center items-center">
                        <div class="h-full w-1 bg-white"></div>
                        <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
                    </div>
                    <div class="col-span-4 w-full h-full">
                    </div>
                    {:else}
                    <div class="col-span-4 w-full h-full">
                    </div>
                    <div class="relative col-span-1 flex justify-center items-center">
                        <div class="h-full w-1 bg-white"></div>
                        <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
                    </div>
                    <div class="col-span-4 w-full h-full">
                        <ExpandableBox data={item}/>
                    </div>
                    {/if}
                </div>
            {/each}
        </div>
    </ScrollableSection>
</div>

<style>
    .article-wrapper {
        @apply text-white w-full flex md:flex-col justify-start;
    }
    .intro-wrapper {
        @apply md:flex-row;
        @apply flex text-lg;
    }
</style>