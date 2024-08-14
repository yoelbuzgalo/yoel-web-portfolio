<script>
    import ExpandableBox from "./ExpandableBox.svelte";
    import { expandedIndex } from "$lib/stores/expandableStore.js";

    let currentIndex = null;

    expandedIndex.subscribe(value => {
        currentIndex = value;
    });

    export let timelineData;
</script>

<div class="h-full w-full overflow-y-auto px-5 flex flex-col justify-start items-center">
    {#each timelineData as item, index}
        <div class="relative top-0 max-w7x w-full grid grid-cols-9">
            {#if (index % 2 === 0)}
                <div class="col-span-4 w-full">
                    <ExpandableBox data={item} index={index}/>
                </div>
                <div class="relative col-span-1 flex justify-center items-center">
                    <div class="h-full w-1 bg-white"></div>
                    <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
                </div>
                <div class="col-span-4 w-full h-full flex justify-center items-center object-contain">
                    <video class="framed m-5 object-contain" style="display: {currentIndex === index ? 'block' : 'none'}" muted autoplay preload="auto" loop>
                        <source src="{item.video}"/>
                    </video>
                </div>
            {:else}
                <div class="col-span-4 w-full h-full flex justify-center items-center object-contain">
                    <video class="framed" style="display: {currentIndex === index ? 'block' : 'none'}" muted autoplay preload="auto" loop>
                        <source src="{item.video}"/>
                    </video>
                </div>
                <div class="relative col-span-1 flex justify-center items-center">
                    <div class="h-full w-1 bg-white"></div>
                    <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
                </div>
                <div class="col-span-4 w-full h-full">
                    <ExpandableBox data={item} index={index}/>
                </div>
            {/if}
        </div>
    {/each}
</div>
