<script>
    import { app } from '../../app';

    import Link from './Link.svelte';

    const links = [
        { label: 'EpiMac', to: 'https://epimac.org' },
        { label: 'GitHub', to: app.repository },
        { label: 'À Propos', to: '/about' }
    ];
</script>

<div id="footer">
    <div id="links">
        {#each links as { label, to }, index (label) }
            {#if index}&nbsp;·&nbsp;{/if}
            <Link {to}>{label}</Link>
        {/each}
    </div>
    <p class="subtext">
        Copyright © 2021 Adrien ‘Litarvan’ Navratil et EpiMac<br />
        Sous <Link to="{app.repository}/blob/master/LICENSE" class="link">license MIT</Link>
    </p>
</div>

<style lang="scss">
    @import 'src/styles/vars';

    #footer {
        flex-direction: column;

        #links {
            justify-content: center;

            margin-bottom: 8px;

            font-weight: 500;
            font-size: 22px;

            color: $color-link;
        }
    }
</style>