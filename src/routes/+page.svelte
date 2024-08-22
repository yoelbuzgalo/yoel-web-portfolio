<script>
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import CustomSection from "$lib/components/CustomSection.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    
    export let data;

    let isVisible = false;

    onMount(() => {
        setTimeout(()=>{
            isVisible = true;
        }, 500)
    })
</script>

<CustomSection sectionName="landing-section" nextSectionName="timeline-section" takeFullScreen={true}>
    <div class="flex flex-col items-center justify-evenly text-center py-10px-40 h-full w-full flex-grow">
        {#if isVisible}
            <img class="framed object-contain w-72 h-auto" transition:fly="{{y:100, duration: 1000}}" src="/images/tlv1.jpg" alt="Yoel Buzgalo sitting in Tel Aviv with laptop"/>
        {/if}
        <div class="flex flex-row items-center justify-start">
            <h1 class="text-xl w-full">Hi there! My name is <strong>Yoel B. Buzgalo</strong> and I am a&nbsp;</h1>
            <div class="w-fit bg-black bg-opacity-50 rounded-sm text-xl p-2">
                <h1 class="whitespace-nowrap">Software Engineer</h1>
            <div class="green-line"></div>
        </div>
    </div>
</CustomSection>
<CustomSection sectionName="timeline-section" nextSectionName="graph-section" takeFullScreen={true}>
    <Timeline timelineData={data.timeline}/>
</CustomSection>
<CustomSection sectionName="graph-section" nextSectionName={null} takeFullScreen={false}>
    <div>
        <h1>About Me</h1>
        <!-- TODO: Add about me section, with a blurb -->
    </div>
</CustomSection>
