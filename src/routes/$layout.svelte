<script>
    import { onMount } from "svelte";

    import NoisyVerticalGradient from "$lib/NoisyVerticalGradient";

    import triangle from '../assets/images/triangle.svg?raw';
    import triangle2 from '../assets/images/triangle_2.svg?raw';

    import '../app.scss';

    let background;

	onMount(() => {
        const nvg = new NoisyVerticalGradient(200, 1080, ['#343D55', '#151925'] );
     // const nvg = new NoisyVerticalGradient(50, 1080, ['#464F67', '#111420'] );

        background.style.backgroundImage = nvg.render_png();
    });
</script>

<div id="background" bind:this={background}>
    <div id="top-triangle" class="triangle">{@html triangle2}</div>
    <div id="bottom-triangle" class="triangle">{@html triangle}</div>
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

            &#top-triangle {
                top: -75px;
                left: -185px;

                transform: rotate(-17deg);
            }

            &#bottom-triangle {
                bottom: -75px;
                right: -100px;

                transform: rotate(-7deg);
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