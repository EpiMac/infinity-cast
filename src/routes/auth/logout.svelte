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
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    import { title } from '../../app';

    import { logout } from '$lib/auth';

    let displayed = false;

    onMount(() => {
        logout();
        setTimeout(() => displayed = true, 150); // Sad but needed till svelte add an equivalent to Vue's <transition>
    });
</script>

<svelte:head>
    <title>{title('Déconnexion')}</title>
</svelte:head>

{#if displayed}
    <div id="logout" in:fade>
        <span id="message">Vous êtes maintenant déconnecté</span>
        <a id="login" href="/auth/login" sveltekit:prefetch>Se connecter</a>
    </div>
{/if}

<style lang="scss">
    @import 'src/styles/vars';

    #logout {
        align-items: center;
        flex-direction: column;
    }

    #message {
        font-size: 24px;
        color: $color-error;
    }

    #login {
        font-size: 18px;
        font-weight: 500;

        margin-top: 10px;
        margin-bottom: 25px;
    }
</style>