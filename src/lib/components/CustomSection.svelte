<script>
    import ArrowDown from '~icons/material-symbols/keyboard-double-arrow-down-rounded'
    export let sectionName;
    export let nextSectionName;

    let scrollFunction = () => {
        const target = document.querySelector(`#${nextSectionName}`);
        if (target) {
            target.scrollIntoView({behavior: 'smooth'});
        }
    }
</script>

<section id="{sectionName}" class="min-h-screen w-full flex flex-col mb-2 py-10 ">
    <slot/>
    {#if nextSectionName}
        <button on:click={scrollFunction} class="sticky bottom-0 left-0 right-0 mx-auto floating flex justify-center z-10">
            <ArrowDown height={30} width={30}/>
        </button>
    {/if}
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
