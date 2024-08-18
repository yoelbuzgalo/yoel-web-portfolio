<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    const validPages = Object.freeze({
        HOME: '/',
        PROJECTS: '/projects',
        CONTACT: '/contact'
    });

    let redirect = async (endpoint, scroll) => {
        const currentPath = $page.url.pathname;

        if (endpoint === validPages.HOME) {
            if (currentPath !== endpoint) {
                await goto(endpoint);
            } 
            if (scroll) {
                const target = document.querySelector(`#${scroll}`);
                if (target) {
                    console.log("Found:" + target);
                    target.scrollIntoView({behavior: 'smooth'});
                } else {
                        console.log("Target not found")
                }
            }
        } else {
            goto(endpoint);
        }

    };
</script>

<header class="h-24 w-full flex justify-center flex-col items-center z-50">   
    <div id="image-intro" class="flex flex-row justify-start items-center">
        <img src="/images/logo.png" alt="custom yb logo icon" class="max-w-20 m-2 rounded-full bg-transparent"/>
        <h1>Portfolio Website</h1>
    </div>
    <nav class="flex flex-row justify-between bg-opacity-0 items-center">
        <div class="mx-5" id="nav-buttons">
            <button on:click={() => redirect(validPages.HOME, "home-section")} id="home-button" class="nav-button">Home</button>
            <button on:click={() => redirect(validPages.HOME, "about-section")} id="about-button" class="nav-button">About</button>
            <button on:click={() => redirect(validPages.PROJECTS, null)} id="projects-button" class="nav-button">Projects</button>
            <button on:click={() => redirect(validPages.CONTACT, null)} id="contact-button" class="nav-button">Contact</button>
        </div>
    </nav>
</header>

<style>
    .nav-button {
        /* constant CSS */
        @apply text-white uppercase rounded-md px-2 py-1 tracking-widest;
        /* transition CSS */
        @apply transition ease-in-out delay-150 hover:bg-black hover:bg-opacity-50 hover:scale-110 text-sm duration-300;
    }
    
    .nav-button::after { 
        @apply absolute left-1/2 bottom-0 block bg-none bg-repeat bg-scroll bg-transparent h-0.5 w-0;
        @apply bg-neon-green;
        content: "";
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    .nav-button:hover::after { 
        @apply shadow-sm shadow-neon-green w-full left-0;
    }
</style>
