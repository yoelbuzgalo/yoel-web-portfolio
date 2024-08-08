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

<section id="{sectionName}" class="snap-start h-screen w-screen">
    <div class="flex flex-col justify-center items-center w-full h-auto">
        <slot/>
        {#if nextSectionName}
            <button on:click={scrollFunction} class="floating w-fit">
                <ArrowDown class="scale-150"/>
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