const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                about: "./about.html",
                astrorunpatchnotes: "./astrorun-patchnotes.html",
                download: './download.html',
                games: './games.html',
                programs: './programs.html',
                smashandflypatchnotes: './smashandfly-patchnotes.html',
                stelexopatchnotes: './stelexo-patchnotes.html',
                maincss: "./css/main.css",
            }
        }
    },
    base: "/jam54/"
})