import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
    target: document.getElementById('app')!,
})

document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

export default app
