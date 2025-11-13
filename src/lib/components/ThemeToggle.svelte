<script lang="ts">
    function toggleTheme() {
        const isDark = localStorage.theme === "dark";
        localStorage.theme = isDark ? "light" : "dark";

        document.documentElement.classList.toggle(
            "dark",
            localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches),
        );
    }
</script>

<button onclick={toggleTheme}>a button</button>
