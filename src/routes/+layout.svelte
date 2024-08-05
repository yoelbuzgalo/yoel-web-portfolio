<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<main class="flex flex-col h-screen overflow-hidden">
    <Header/>
    <slot />
    <Footer/>
</main>
