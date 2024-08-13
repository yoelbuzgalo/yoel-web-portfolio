<script>
    import { TypeWriter } from "svelte-typewrite";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import ScrollableSection from "../components/ScrollableSection.svelte";
    import TimelineBox from "../components/TimelineBox.svelte";
    
    export let data;
    let headerHeight;
    let footerHeight;

    let isVisible = false;

    onMount(() => {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');

        if (header) {
            headerHeight = header.offsetHeight;
        }

        if (footer) {
            footerHeight = footer.offsetHeight;
        }



        setTimeout(()=>{
            isVisible = true;
        }, 500)
    })
</script>

<div id="home-slot" class="snap-mandatory snap-y overflow-y-scroll" style="height: calc(100vh - {headerHeight+footerHeight}px)">
    <ScrollableSection sectionName="home-section" nextSectionName="about-section">
        <article class="grid grid-cols-9 my-5">
            <div class="col-span-4">
                <h1 class="text-xl w-fit">Hi there! My name is <strong>Yoel B. Buzgalo</strong></h1>
                <h1 class="text-xl w-fit">and I'm a ...</h1>
                <div class="w-fit bg-black bg-opacity-50 rounded-sm text-xl">
                    <TypeWriter texts={["Software Engineer", "Practical Electrical Engineer"]} waitBetweenTexts=1000/>
                    <div class="shadow-sm bg-neon-green h-0.5 shadow-neon-green"></div>
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
        <TimelineBox timelineData={data.timeline}/>
    </ScrollableSection>
</div>