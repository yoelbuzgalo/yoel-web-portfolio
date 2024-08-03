<script>
    import GitHub from '~icons/grommet-icons/github'
    import LinkedIn from '~icons/mdi/linkedin'
    import Email from '~icons/ic/baseline-email'
</script>

<footer class="flex flex-row justify-end items-center my-4 fixed left-0 bottom-0 w-full">
    <div class="mx-5 flex flex-row items-center justify-end" id="link-buttons">
        <a href="mailto:yoelbuzgalo@gmail.com" class="footer-button items-center justify-center p-2 scale-125 mx-2">
            <Email/>
        </a>
        <a href="https://github.com/yoelbuzgalo" class="footer-button items-center justify-center p-2 scale-125 mx-2">
            <GitHub/>
        </a>
        <a href="https://www.linkedin.com/in/yoel-buzgalo/" class="footer-button items-center justify-center p-2 scale-125 mx-2">
            <LinkedIn/>
        </a>
    </div>
</footer>

<style>
    .footer-button {
        /* constant CSS */
        @apply text-neon-green underline rounded-md px-2 py-1; 
        /* transition CSS */
        @apply transition ease-in-out delay-150 hover:bg-opacity-50 hover:scale-150 text-sm duration-300;
    }
</style>