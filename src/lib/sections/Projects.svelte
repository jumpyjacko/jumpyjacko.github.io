<script lang="ts">
    function goToLink(link: string) {
        window.open(link, "_blank");
    }
</script>

<h1 class="text-2xl">stuff I have made</h1>

<h1 class="text-lg">the real projects</h1>
<div class="grid grid-cols-2 gap-8 text-wrap w-3/4">
    <div>
        <iframe src="/" title="this website" class="h-full w-full"> </iframe>
        this website
    </div>
    <button
        onclick={() =>
            goToLink("https://github.com/jumpyjacko/audio_converter")}
    >
        <img
            src="https://raw.githubusercontent.com/jumpyjacko/audio_converter/main/.github/gallery-1.png"
            alt="Batch audio file converter GUI application"
        />
        GUI audio file converter
    </button>
    <button onclick={() => goToLink("https://github.com/jumpyjacko/bakayomi")}>
        <img
            src="https://github.com/jumpyjacko/bakayomi/blob/main/screenshots/home_wide.jpg?raw=true"
            alt="Browser-based manga/comics reader with OCR (very not-done)"
        />
        <img
            src="https://github.com/jumpyjacko/bakayomi/raw/main/screenshots/series_wide.jpg"
            alt="Series view for a browser-based manga reader"
        />
        manga reader with ocr
    </button>
</div>

<h1 class="text-lg mt-10">the random projects</h1>

<div class="grid grid-cols-2 gap-8 text-wrap w-3/4">
    <button onclick={() => goToLink("https://github.com/jumpyjacko/wireframe-cli")}>
        <img
            src="https://github.com/jumpyjacko/wireframe-cli/raw/main/images/wireframe-cli-cube.gif"
            alt="Terminal 3D wireframe renderer"
        />
        terminal wireframe renderer
    </button>
    <button onclick={() => goToLink("https://github.com/jumpyjacko/terminal_renderer")}>
        <img
            src="https://github.com/jumpyjacko/terminal_renderer/raw/main/gallery/suzanne.gif"
            alt="Terminal 3D renderer for OBJ files"
        />
        terminal .obj renderer (with lighting!)
    </button>
    <button onclick={() => goToLink("https://github.com/jumpyjacko/slashg")}>
        <div class="flex flex-row">
            <img
                src="https://github.com/user-attachments/assets/da5b83b7-5cfd-462f-acbb-6c777ab8879e"
                alt="Native android app that calculates things per 100g"
                class="w-1/2"
            />
            <img
                src="https://github.com/user-attachments/assets/d2e07573-ba72-430c-b0f3-8f6a8ebe3469"
                alt="Native android app that calculates things per 100g"
                class="w-1/2"
            />
        </div>
        native android app that calculates things per 100g
    </button>
    <button onclick={() => goToLink("https://github.com/jumpyjacko/fractl")}>
        <img
            src="https://github.com/jumpyjacko/fractl/raw/main/images/default.png"
            alt="Julia set fractal"
        />
        <img
            src="https://github.com/jumpyjacko/fractl/raw/main/images/seahorse_valley.png"
            alt="Fractal zoom of the seahorse valley on the Mandlebrot fractal"
        />
        cpu fractal renderer
    </button>
    <button onclick={() => goToLink("https://github.com/jumpyjacko/lorenz_attractor")}>
        <img
            src="https://raw.githubusercontent.com/jumpyjacko/lorenz_attractor/main/example.gif"
            alt="Lorenz attractor rendered using braille for better resolution"
        />
        terminal lorenz attractor simulation
    </button>
    <button onclick={() => goToLink("https://github.com/jumpyjacko/maze_game")}>
        <img
            src="https://github.com/jumpyjacko/maze_game/raw/main/images/maze_example.gif?raw=true"
            alt="Terminal-based maze game with pathfinding algorithms"
        />
        terminal maze game, with path finder algorithms
    </button>
</div>

<style>
    button,
    div {
        text-align: center;
    }

    button {
        cursor: pointer;
    }
</style>
