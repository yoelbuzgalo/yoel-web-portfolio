<script>
    import ExpandableBox from "./ExpandableBox.svelte";
    export let timelineData;

    let currentExpandedIndex = null;

    let updateExpandedIndex = (newIndex) => {
        currentExpandedIndex = (currentExpandedIndex === newIndex) ? null : newIndex;
    }

</script>

<div class="h-full w-full px-5 flex flex-col justify-center items-center object-contain">
    {#each timelineData as item, index}
        <div class="h-full w-full grid grid-cols-9">
            {#if (index % 2 === 0)}
                <div class="col-span-4 w-full">
                    <ExpandableBox on:expanded={(e) => updateExpandedIndex(e.detail)} currentExpandedIndex={currentExpandedIndex} assignedIndex={index} data={item}/>
                </div>
                <div class="col-span-1 flex justify-center items-center">
                    <div class="h-full w-1 bg-white"></div>
                    <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
                </div>
                <div class="col-span-4 w-full h-full flex justify-center items-center object-contain">
                    <video class="framed m-5 object-contain" style="display: {currentExpandedIndex === index ? 'block' : 'none'}" muted autoplay preload="auto" loop>
                        <source src="{item.video}" type="video/mp4"/>
                    </video>
                </div>
            {:else}
                <div class="col-span-4 w-full h-full flex justify-center items-center object-contain">
                    <video class="framed" style="display: {currentExpandedIndex === index ? 'block' : 'none'}" muted autoplay preload="auto" loop>
                        <source src="{item.video}" type="video/mp4"/>
                    </video>
                </div>
                <div class="col-span-1 flex justify-center items-center">
                    <div class="h-full w-1 bg-white"></div>
                    <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
                </div>
                <div class="relative col-span-4 w-full h-full">
                    <ExpandableBox on:expanded={(e) => updateExpandedIndex(e.detail)} currentExpandedIndex={currentExpandedIndex} assignedIndex={index} data={item}/>
                </div>
            {/if}
        </div>
    {/each}
</div>
