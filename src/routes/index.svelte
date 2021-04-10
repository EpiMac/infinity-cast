<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load() {
        return {
            redirect: '/login',
            status: 302
        }
    }
</script>