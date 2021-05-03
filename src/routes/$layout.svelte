<script>
    import { fade } from 'svelte/transition';

    import { user } from '$lib/auth';

    import Background from '$lib/components/Background.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import logo from '../assets/images/logo.svg?raw';

    import '../app.scss';
</script>

<Background />

<div id="content" class="variable" class:wide={$user}>
    <div id="header">
        <div id="logo" class="variable">
            {@html logo}
        </div>

        {#if $user}
            <a id="logout" href="/auth/logout" sveltekit:prefetch in:fade={{ delay: 200 }} out:fade={{ duration: 175 }}>
                Se déconneter
            </a>
        {/if}
    </div>

    <slot />

    <Footer />
</div>

<style lang="scss">
    #content {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        z-index: 2;

        width: 575px;
        padding: 35px 0;

        background-color: white;

        &.wide {
            width: 1050px;

            #header #logo {
                width: 300px;
                margin-top: 0;
                margin-left: 0;
            }
        }
    }

    #header {
        width: 100%;
        padding: 20px 75px;

        justify-content: space-between;
        align-items: center;

        overflow: hidden;

        #logo {
            flex-shrink: 0;

            width: 400px;
            margin-top: 25px;
            margin-left: 12.5px; // Same as `justify-content: center` but with nice transition
        }

        #logout {
            color: #251515;

            font-size: 22px;
            font-weight: 500;
        }
    }
</style>