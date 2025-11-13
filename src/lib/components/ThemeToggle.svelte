<script lang="ts">
    import { onMount } from "svelte";

    let isDark = $state(false);

    onMount(() => { // HACK: fixes site starting on wrong state
        isDark = localStorage.theme !== "dark";
    });

    function toggleTheme() {
        isDark = localStorage.theme === "dark";
        localStorage.theme = isDark ? "light" : "dark";

        document.documentElement.classList.toggle(
            "dark",
            localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches),
        );
    }
</script>

<button onclick={toggleTheme}>
    {isDark ? "go to dark" : "go to light"}
</button>
