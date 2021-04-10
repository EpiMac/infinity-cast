<script>
    import { onMount } from "svelte";

    import NoisyVerticalGradient from "$lib/NoisyVerticalGradient";

    import topTriangle from '../assets/images/top_triangle.svg?raw';
    import bottomTriangle from '../assets/images/bottom_triangle.svg?raw';

    import '../app.scss';

    let background;

	onMount(() => {
        const nvg = new NoisyVerticalGradient(200, 1080, ['#343D55', '#151925'] );
     // const nvg = new NoisyVerticalGradient(50, 1080, ['#464F67', '#111420'] );

        background.style.backgroundImage = nvg.render_png();
    });
</script>

<div id="background" bind:this={background}>
    <div id="top-triangle" class="triangle">{@html topTriangle}</div>
    <div id="bottom-triangle" class="triangle">{@html bottomTriangle}</div>
</div>

<div id="content">
    <slot />
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
                bottom: -50px;
                right: -75px;

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

        padding: 35px 75px;

        background-color: white;

        transition: width .25s;
    }
</style>