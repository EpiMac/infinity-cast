import { crossfade } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';

// TODO: Investigate

export const keys = { logo: 'logo' };
export const [send, receive] = crossfade({
    delay: 100,
    duration: 1000,
    easing: cubicInOut
});
