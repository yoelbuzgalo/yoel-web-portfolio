<header class="flex flex-col justify-start items-center mb-4">
    <div id="image-intro" class="flex flex-row justify-start items-center">
        <image src="/images/logo2.png" alt="custom yb logo icon" class="h-auto m-2 max-w-20 rounded-full bg-transparent"/>
        <h1>Portfolio Website</h1>
    </div>
    <nav class="flex flex-row justify-between bg-opacity-0 items-center">
        <div class="mx-5" id="nav-buttons">
            <button on:click={() => console.log("Navigate to /home and scroll to top")} id="home" class="nav-button">Home</button>
            <button on:click={() => console.log("Navigate to /home and scroll to bottom")} id="about" class="nav-button">About</button>
            <button on:click={() => console.log("Navigate to /projects")} id="projects" class="nav-button">Projects</button>
            <button on:click={() => console.log("Navigate to /contact")} id="contact" class="nav-button">Contact</button>
        </div>
    </nav>
</header>

<style>
    .nav-button {
        /* constant CSS */
        @apply text-neon-green underline rounded-md px-2 py-1 shadow-sm shadow-neon-green; 
        /* transition CSS */
        @apply transition ease-in-out delay-150 hover:bg-black hover:bg-opacity-50 hover:scale-110 text-sm duration-300;
    }
</style>