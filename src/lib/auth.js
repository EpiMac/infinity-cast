export let user = null;

export function login()
{
    // TODO: Implement login
    return new Promise(r => setTimeout(() => {
        user = {};
        r();
    }, 1500));
}