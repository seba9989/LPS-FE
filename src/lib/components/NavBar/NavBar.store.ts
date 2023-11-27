import { writable } from 'svelte/store';

export const isNavBar = writable<boolean>(false);

export const changeNavBar = () => isNavBar.update((state) => !state);
