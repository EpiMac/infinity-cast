<script>
    export let to = '/';
    $: params = to.startsWith('http') ? { rel: 'external', target: '_blank' } : {};
</script>

<a href="{to}" {...params}>
    <slot />
</a>