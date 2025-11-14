<script lang="ts">
    import ThemeToggle from "./lib/components/ThemeToggle.svelte";
    import MainBird from "./lib/components/MainBird.svelte";
    import Clock from "./lib/components/Clock.svelte";
</script>

<ThemeToggle />
<header class="fixed flex flex-row bg-transparent"></header>
<main class="flex flex-col justify-center items-center">
    <Clock />
    <MainBird />
    <h1 class="text-4xl text-center mt-5">hi there</h1>
</main>
