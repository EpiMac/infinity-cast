import { writable } from 'svelte/store';

export let user = writable(null);

export function login()
{
    // TODO: Implement login
    return new Promise(r => setTimeout(() => {
        user.set({});
        r();
    }, 1500));
}

export function logout()
{
    // TODO: Implement logout
    user.set(null);
}