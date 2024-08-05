<script>
    import { TypeWriter } from "svelte-typewrite";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import ArrowDown from '~icons/material-symbols/keyboard-double-arrow-down-rounded'

    let buttonVisibility = true;

    let isVisible = false;

    onMount(() => {
        setTimeout(()=>{
            isVisible = true;
        }, 500)
    })

</script>

<div id="home-page" class="overflow-y-scroll snap-mandatory snap-y">
    <section id="home" class="snap-start h-screen w-screen">
        <div class="flex flex-col justify-center items-center">
            <div class="flex flex-row justify-evenly py-10 px-52 h-full w-full">
                <article class="article-wrapper py-10">
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
            <button class="floating w-fit">
                <ArrowDown class="scale-150"/>
            </button>
        </div>
    </section>
    <section id="about" class="snap-start h-screen w-screen">
        <div class="article-img-wrapper py-10 px-52">
            <article class="article-wrapper">
                <h1 class="text-xl mb-5">Here's some interesting facts about me!</h1>
            </article>
        </div>
    </section>
</div>

<style>

    html {
        scroll-behavior: smooth;
    }

    #home-page {
        scroll-snap-type: mandatory;
    }

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