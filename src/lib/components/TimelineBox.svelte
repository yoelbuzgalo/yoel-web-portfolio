<script>
    import ExpandableBox from "./ExpandableBox.svelte";
    export let timelineData;
</script>

<div class="h-full w-full overflow-y-scroll px-5">
    {#each timelineData as item, index}
        <div class="relative top-0 max-w7x w-full grid grid-cols-9">
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