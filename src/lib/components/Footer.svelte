<script>
    import GitHub from '~icons/grommet-icons/github'
    import LinkedIn from '~icons/mdi/linkedin'
    import Email from '~icons/ic/baseline-email'
</script>

<footer class="sticky flex flex-row justify-end items-center h-fit w-full left-0 bottom-0">
    <a href="mailto:yoelbuzgalo@gmail.com" class="footer-button rounded-sm items-center justify-center mx-2">
        <Email height=25 width=25/>
    </a>
    <a href="https://github.com/yoelbuzgalo" class="footer-button rounded-full items-center justify-center mx-2">
        <GitHub height=25 width=25/>
    </a>
    <a href="https://www.linkedin.com/in/yoel-buzgalo/" class="footer-button rounded-sm items-center justify-center mx-2">
        <LinkedIn height=25 width=25/>
    </a>
</footer>

<style>
    .footer-button {
        @apply text-white;
        /* transition CSS */
        @apply transition ease-in-out delay-150 hover:bg-opacity-50 hover:bg-black hover:shadow-sm hover:scale-110 hover:shadow-neon-green text-sm duration-300 mb-2;
    }
</style>