<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="flex flex-col h-full w-full">
    <Header/>
    <main class="flex-1">
        <slot/>
    </main>
    <Footer/>
</div>
