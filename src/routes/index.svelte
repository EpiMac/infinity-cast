<script context="module">
    import { user } from '$lib/auth';
    // import { receive, keys } from '$lib/ui/crossfade';

    import create from '../assets/images/menu_create.svg?raw';
    import pending from '../assets/images/menu_pending.svg?raw';
    import sent from '../assets/images/menu_sent.svg?raw';

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
    import { fade } from 'svelte/transition';

    import { title } from '../app';

    import Footer from '$lib/components/Footer.svelte';
    import Logo from '$lib/components/Logo.svelte';

    const entries = [
        { path: '/new/author', label: 'Créer une nouvelle annonce', icon: create },
        { path: '/list/pending', label: 'Voir les annonces en attente d\'envoi', icon: pending },
        { path: '/list/sent', label: 'Consulter l\'historique d\'envoi', icon: sent }
    ];
</script>

<svelte:head>
    <title>{title('Accueil')}</title>
</svelte:head>

<div id="header">
    <!-- <div id="logo" in:receive={{ key: keys.logo }}> -->
    <div id="logo">
        <Logo />
    </div>
    <a id="logout" href="/auth/logout" sveltekit:prefetch in:fade={{ delay: 200 }}>Se déconneter</a>
</div>

<div id="menu" in:fade={{ delay: 400, duration: 175 }}>
    {#each entries as entry}
        <a class="entry card clickable opaque" sveltekit:prefetch href={entry.path}>
            <div class="icon">{@html entry.icon}</div>
            <div class="label">{@html entry.label}</div>
            <div>&gt;</div>
        </a>
    {/each}
</div>

<Footer />

<style lang="scss">
    #header {
        width: 100%;
        padding: 20px 75px;

        justify-content: space-between;
        align-items: center;

        overflow: hidden;

        #logo {
            flex-shrink: 0;
            animation: logo-appear .6s 1 forwards;
        }

        #logout {
            color: #251515;

            font-size: 22px;
            font-weight: 500;
        }
    }

    #menu {
        flex-direction: column;

        .entry {
            width: 700px;
            height: 105px;

            display: flex;
            align-items: center;

            padding: 0 25px;

            &:not(:last-child) {
                margin-bottom: 20px;
            }

            .icon {
                transform: translateY(3px); // When using margin, a glitch will appear on hovering
            }

            .label {
                flex-grow: 1;
                font-size: 22px;

                margin-left: 25px;
            }
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