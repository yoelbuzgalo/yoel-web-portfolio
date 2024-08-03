<script>
    import { TypeWriter } from "svelte-typewrite";
</script>

<main>
    <section>
        <div class="flex flex-row justify-evenly mt-10">
            <article class="text-neon-green w-96">
                <TypeWriter texts={["The developer", "Your future, is my future"]} waitBetweenTexts=1000/>
            </article>
            <image class="text-neon-green rounded-md max-w-60" src="/images/tlv1.jpg" alt="Portfolio Photo"/>
        </div>
    </section>
</main>

<style>
</style>