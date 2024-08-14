<script>
    import ArrowDown from '~icons/material-symbols/keyboard-double-arrow-down-rounded'
    export let sectionName;
    export let nextSectionName;

    let scrollFunction = () => {
        const target = document.querySelector(`#${nextSectionName}`);
        if (target) {
            console.log("Found:" + target);
            target.scrollIntoView({behavior: 'smooth'});
        } else {
            console.log("Target not found")
        }
    }
</script>

<section id="{sectionName}" class="h-screen w-full snap-start mx-auto pt-28 pb-8 px-28 mb-2">
    <div class="flex flex-col justify-between items-center h-full w-full">
        <slot/>
        {#if nextSectionName}
        <button on:click={scrollFunction} class="floating relative bottom-0 w-fit h-fit z-10">
            <ArrowDown height=30 width=30/>
        </button>
        {/if}
    </div>
</section>

<style>
    .floating {
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>