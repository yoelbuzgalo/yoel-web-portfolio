<script>
    import { fly } from "svelte/transition";
    import SolidArrow from '~icons/bxs/right-arrow';
    import LinedArrow from '~icons/bx/right-arrow';

    export let date;
    export let role;
    export let imgSrc;
    export let imgAlt;

    let expandBox = false;

    let toggleExpand = () => {
        expandBox = !expandBox;
    };
</script>

<div class="flex flex-col justify-between">
    <div class="flex flex-row justify-between items-center">
        {#if imgSrc}
            <img class="framed max-w-sm w-24" src={imgSrc} alt={imgAlt}>
        {/if}
        <h1 class="px-3 text-lg">{date} - {role}</h1>
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
        <div transition:fly="{{x:-100, duration: 1000}}" class="flex flex-col items-center justify-center pt-10">
            <p>
                <slot/>
            </p>
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

    .framed {
        @apply text-neon-green max-w-xs overflow-hidden object-cover;
        box-shadow: -45px -45px 0 -40px var(--neon-green), 45px 45px 0 -40px var(--neon-green);
    }
</style>
