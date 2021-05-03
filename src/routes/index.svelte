<script context="module">
    import { get } from 'svelte/store';

    import { user } from '$lib/auth';

    export async function load() {
        if (get(user)) {
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

    import create from '../assets/images/menu_create.svg?raw';
    import pending from '../assets/images/menu_pending.svg?raw';
    import sent from '../assets/images/menu_sent.svg?raw';
    import select from '../assets/images/menu_select.svg?raw';

    const entries = [
        { path: '/new/author', label: 'Créer une nouvelle annonce', icon: create },
        { path: '/list/pending', label: 'Voir les annonces en attente d\'envoi', icon: pending },
        { path: '/list/sent', label: 'Consulter l\'historique d\'envoi', icon: sent }
    ];
</script>

<svelte:head>
    <title>{title('Accueil')}</title>
</svelte:head>

<div id="menu" in:fade={{ delay: 400, duration: 175 }} out:fade={{ duration: 150 }}>
    {#each entries as entry}
        <a class="entry card clickable opaque" sveltekit:prefetch href={entry.path}>
            <div class="icon">{@html entry.icon}</div>
            <div class="label">{@html entry.label}</div>
            <div class="select">{@html select}</div>
        </a>
    {/each}
</div>

<style lang="scss">
    #menu {
        flex-direction: column;
    }

    .entry {
        width: 700px;
        height: 105px;

        display: flex;
        align-items: center;

        padding: 0 25px;

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    .icon {
        transform: translateY(3px); // When using margin, a glitch will appear on hovering, idk why
    }

    .label {
        flex-grow: 1;
        font-size: 22px;

        margin-left: 25px;
    }
</style>