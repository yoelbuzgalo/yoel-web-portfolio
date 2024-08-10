<script>
    import GitHub from '~icons/grommet-icons/github'
    import LinkedIn from '~icons/mdi/linkedin'
    import Email from '~icons/ic/baseline-email'
</script>

<footer class="flex flex-row justify-end items-center my-4 fixed left-0 bottom-0 w-full overflow-hidden">
    <div class="mx-5 flex flex-row items-center justify-end" id="link-buttons">
        <a href="mailto:yoelbuzgalo@gmail.com" class="footer-button rounded-sm items-center justify-center scale-125 mx-2">
            <Email/>
        </a>
        <a href="https://github.com/yoelbuzgalo" class="footer-button rounded-full items-center justify-center scale-125 mx-2">
            <GitHub/>
        </a>
        <a href="https://www.linkedin.com/in/yoel-buzgalo/" class="footer-button rounded-sm items-center justify-center scale-125 mx-2">
            <LinkedIn/>
        </a>
    </div>
</footer>

<style>
    .footer-button {
        @apply text-white;
        /* transition CSS */
        @apply transition ease-in-out delay-150 hover:bg-opacity-50 hover:bg-black hover:shadow-sm hover:shadow-neon-green hover:scale-150 text-sm duration-300;
    }
</style>