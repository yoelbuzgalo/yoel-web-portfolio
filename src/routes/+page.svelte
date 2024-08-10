<script>
    import { TypeWriter } from "svelte-typewrite";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import ScrollableSection from "../components/ScrollableSection.svelte";
    import ExpandableBox from "../components/ExpandableBox.svelte";

    let isVisible = false;

    onMount(() => {
        setTimeout(()=>{
            isVisible = true;
        }, 500)
    })

    let expandedBoolean = false;

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
                <img class="framed" transition:fly="{{y:100, duration: 1000}}" src="/images/tlv1.jpg" alt="Yoel Buzgalo sitting in Tel Aviv with laptop"/>
            {/if}
        </div>
    </ScrollableSection>
    <ScrollableSection sectionName="about-section" nextSectionName={null}>
        <div class="flex flex-col items-center justify-center">
            <ExpandableBox date="August 2023 - Current" role="B.S. Software Engineer Student" imgSrc="images/logo2.png">
                Description here
            </ExpandableBox>
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
    .framed {
        @apply text-neon-green lg:max-w-lg md:max-w-md sm:max-w-sm overflow-hidden object-cover;
        box-shadow: -45px -45px 0 -40px var(--neon-green), 45px 45px 0 -40px var(--neon-green);
    }
</style>