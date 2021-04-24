<script context="module">
    import { user } from '$lib/auth';
    // import { receive, keys } from '$lib/ui/crossfade';

    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load() {
        if (user) {
            return {};
        }

        return {
            redirect: '/auth/login',
            status: 302
        };
    }
</script>

<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    import { title } from '../app';

    import Footer from '$lib/components/Footer.svelte';
    import Logo from '$lib/components/Logo.svelte';

    let displayLogout = false;

    onMount(() => setTimeout(() => displayLogout = true, 300));
</script>

<svelte:head>
    <title>{title('Accueil')}</title>
</svelte:head>

<div id="header">
    <!-- <div id="logo" in:receive={{ key: keys.logo }}> -->
    <div id="logo">
        <Logo />
    </div>
    {#if displayLogout}
        <a id="logout" href="/logout" in:fade>Se déconneter</a>
    {/if}
</div>

<div in:fade>
    Salut :)
</div>

<Footer />

<style lang="scss">
    #header {
        width: 100%;
        padding: 20px 75px;

        justify-content: space-between;
        align-items: center;

        #logo {
            animation: logo-appear .6s 1 forwards;
        }

        #logout {
            color: #251515;

            font-size: 22px;
            font-weight: 500;
        }
    }

    // TODO: Replace with cross-fade
    @keyframes logo-appear {
        0% {
            width: 400px;
            margin-top: 25px;
            margin-left: 12.5px;
        }

        100% {
            width: 300px;
            margin-top: 0;
            margin-left: 0;
        }
    }
</style>