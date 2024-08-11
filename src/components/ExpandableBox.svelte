<script>
    import { fly } from "svelte/transition";
    import SolidArrow from '~icons/bxs/right-arrow';
    import LinedArrow from '~icons/bx/right-arrow';

    export let data;

    let expandBox = false;

    let toggleExpand = () => {
        expandBox = !expandBox;
    };
</script>

<div class="flex flex-col items-start justify-center my-5 bg-black bg-opacity-50 rounded-md p-5">
    <div class="flex flex-row justify-center items-center">
        {#if data.imgSrc}
            <img class="framed max-w-sm w-24" src={data.imgSrc} alt={data.imgAlt}>
        {/if}
        <div class="flex flex-col">
            <h1 class="px-3 text-lg">{data.role}</h1>
            <h1 class="px-3 text-lg font-semibold">{data.date}</h1>
        </div>
        <button on:click={toggleExpand}>
            {#if expandBox}
                <div class="rotate-icon">
                    <SolidArrow id="about-button-2"/>    
                </div>
            {:else}
                <div class="rotate-icon-reversed">
                    <LinedArrow id="about-button-1"/>    
                </div>
            {/if}
        </button>
    </div>
    {#if expandBox}
        <div transition:fly="{{x:-100, duration: 1000}}" class="mt-5 p-5 bg-black bg-opacity-50 rounded-md relative top-0 left-0">
            <ol class="ml-5 list-disc">
                {#each data.descriptions as description}
                    <li>
                        {description}
                    </li>
                {/each}
            </ol>
        </div>
    {/if}
</div>

<style>
    .rotate-icon {
        animation: rotate 0.1s linear forwards;
    }

    .rotate-icon-reversed {
        animation: rotate 0.1s linear reverse forwards;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
            @apply text-white;
        }
        to {
            transform: rotate(90deg);
            @apply text-neon-green;
        }
    }
</style>
