<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    import NoisyVerticalGradient from '$lib/ui/background';
    import { user } from '$lib/auth';

    import Logo from '$lib/components/Logo.svelte';
    import Footer from '../lib/components/Footer.svelte';

    import topTriangle from '../assets/images/top_triangle.svg?raw';
    import bottomTriangle from '../assets/images/bottom_triangle.svg?raw';

    import '../app.scss';

    let background;

    onMount(() => {
        const nvg = new NoisyVerticalGradient(50, 1080, ['#343D55', '#0e1016']);
        background.style.backgroundImage = nvg.render_png();
    });
</script>

<div id="background" bind:this={background}>
    <div id="top-triangle" class="triangle">{@html topTriangle}</div>
    <div id="bottom-triangle" class="triangle">{@html bottomTriangle}</div>
</div>

<div id="content" class="variable" class:wide={$user}>
    <div id="header">
        <div id="logo" class="variable">
            <Logo />
        </div>

        {#if $user}
            <a id="logout" href="/auth/logout" sveltekit:prefetch in:fade={{ delay: 200 }}>Se déconneter</a>
        {/if}
    </div>

    <slot />

    <Footer />
</div>

<style lang="scss">
    @import '../styles/vars';

    #background {
        position: relative;
        z-index: 1;

        flex-grow: 1;

        overflow: hidden;

        background: $gradient-background;

        .triangle {
            position: absolute;

            $shadowShift: 3px;
            $shadowSize: 15px;
            $shadowColor: rgba(0, 0, 0, .25);

            &#top-triangle {
                top: -175px;
                left: -175px;

                width: 500px;

                filter: drop-shadow($shadowShift $shadowShift $shadowSize $shadowColor);
            }

            &#bottom-triangle {
                bottom: -75px;
                right: -100px;

                width: 600px;

                filter: drop-shadow(#{-$shadowShift} #{-$shadowShift} $shadowSize $shadowColor);
            }
        }
    }

    #content {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        z-index: 2;

        width: 575px;
        padding: 35px 0;

        background-color: white;

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

        &.wide {
            width: 1050px;

            #header #logo {
                width: 300px;
                margin-top: 0;
                margin-left: 0;
            }
        }
    }
</style>