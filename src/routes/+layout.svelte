<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<main class="flex flex-col h-screen w-screen snap-mandatory snap-y overflow-y-auto">
    <Header/>
    <slot />
    <Footer/>
</main>
