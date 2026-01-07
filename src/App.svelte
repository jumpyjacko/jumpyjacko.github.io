<script lang="ts">
    import MainBird from "./lib/components/MainBird.svelte";
    import Clock from "./lib/components/Clock.svelte";
    import SocialsRow from "./lib/components/SocialsRow.svelte";

    import Projects from "./lib/sections/Projects.svelte";

    import { onMount } from "svelte";

    let scrollIndicator: SVGElement;

    function removeScrollIndicator() {
        scrollIndicator.classList.remove("animate-bounce");
        scrollIndicator.classList.add("slide-down");
        window.removeEventListener("scroll", removeScrollIndicator);
    }

    onMount(() => {
        window.addEventListener("scroll", removeScrollIndicator);
    });
</script>

<main class="flex flex-col justify-center items-center">
    <Clock />
    <MainBird />
    <h1 class="text-2xl md:text-4xl text-center mt-5">
        hi, i'm jackson,<br />a software developer
    </h1>

    <div class="h-8"></div>
    <SocialsRow />

    <div class="mt-100"></div>
    <Projects />
    <div class="mb-10"></div>

    <h2
        class="text-2xl text-center justify-center w-full flex flex-col items-center"
    >
        I use Arch btw
        <img
            src="https://github.com/jumpyjacko/dotfiles/raw/wayland/images/niri_main.jpg"
            alt="Screenshot of an Arch-based desktop"
            class="w-1/2 p-1"
        />
        <img
            src="https://github.com/jumpyjacko/nvim/raw/main/images/cmp_oil.jpg"
            alt="Screenshot of a Neovim window"
            class="w-1/2 p-1"
        />
    </h2>

    <div class="mb-50"></div>
</main>
<footer
    class="hidden md:flex flex-row justify-end fixed bottom-0 right-0 p-1 z-1"
>
    <a
        href="https://github.com/jumpyjacko/jumpyjacko.github.io"
        target="_blank"
        class="underline"
    >
        source code
    </a>
</footer>
<button
    class="fixed bottom-0 w-full flex justify-center pt-4 pb-1"
    onclick={() => window.scrollBy(0, window.innerHeight / 2)}
    aria-label="Scroll to content"
>
    <svg
        bind:this={scrollIndicator}
        width="60"
        height="35"
        class="animate-bounce"
    >
        <path
            d="M15 15 L30 30 L45 15"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
        />
    </svg>
</button>

<style>
    :global {
        .slide-down {
            animation-duration: 250ms;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
            animation-name: slide-down;
        }

        @keyframes slide-down {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(50px);
            }
        }
    }
</style>
