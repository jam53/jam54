import {defineConfig} from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
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
            }
        }
    },
    base: "/",
    plugins: [
        tailwindcss(),
        injectTagsIntoHead(),
        injectTagsIntoBody(),
    ],
})

/**
 * This function injects tags into the head of every HTML file in the project
 */
function injectTagsIntoHead() {
    return {
        name: "inject-into-head",
        transformIndexHtml: {
            // Ensures that the tags are injected before Vite runs its HTML parser which scans for dependencies.
            // Should we omit this, the assets referenced in these tags wouldn't be included when Vite builds the project,
            // since these tags wouldn't be present yet in the HTML when Vite scans for dependencies.
            order: "pre",
            handler() {
                return {
                    tags: [
                        { tag: "meta", attrs: { charset: "utf-8" }, injectTo: "head" },
                        { tag: "meta", attrs: { name: "description", content: "Software development and game development by jam54." }, injectTo: "head" },
                        { tag: "meta", attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }, injectTo: "head" },
                        { tag: "meta", attrs: { name: "theme-color", content: "#fafafa" }, injectTo: "head" },

                        { tag: "meta", attrs: { property: "og:title", content: "Jam54" }, injectTo: "head" },
                        { tag: "meta", attrs: { property: "og:type", content: "website" }, injectTo: "head" },
                        { tag: "meta", attrs: { property: "og:url", content: "jam54.com" }, injectTo: "head" },
                        { tag: "meta", attrs: { property: "og:image", content: "./icon.png" }, injectTo: "head" },

                        { tag: "link", attrs: { rel: "manifest", href: "site.webmanifest" }, injectTo: "head" },
                        { tag: "link", attrs: { rel: "apple-touch-icon", href: "./icon.png" }, injectTo: "head" },
                        { tag: "link", attrs: { rel: "icon", href: "favicon.ico", type: "image/x-icon" }, injectTo: "head" },
                        { tag: "link", attrs: { rel: "shortcut icon", href: "favicon.ico", type: "image/x-icon" }, injectTo: "head" },

                        { tag: "link", attrs: { rel: "stylesheet", href: "css/main.css" }, injectTo: "head" },
                        {
                            tag: "script",
                            attrs: {
                                defer: true,
                                src: "https://jam54-api.jam54.com/main.js",
                                "data-host-url": "https://jam54-api.jam54.com/",
                                "data-website-id": "07f62870-33ef-4ac3-b2e6-fd531df84517",
                                "data-domains": "jam54.com,www.jam54.com",
                            },
                            injectTo: "head",
                        },
                    ]
                };
            }
        }
    }
}

/**
 * This function injects tags into the <body> tag of every HTML file in the project
 */
function injectTagsIntoBody() {
    return {
        name: "inject-into-body",
        transformIndexHtml: {
            // Ensures that the tags are injected before Vite runs its HTML parser which scans for dependencies.
            // Should we omit this, the assets referenced in these tags wouldn't be included when Vite builds the project,
            // since these tags wouldn't be present yet in the HTML when Vite scans for dependencies.
            order: "pre",
            handler() {
                return {
                    tags: [
                        { tag: "script", attrs: { type: "module", src: "js/index.js" }, injectTo: "body" },
                        { tag: "script", attrs: { type: "module", src: "js/customElements/top-navbar.js" }, injectTo: "body" },
                        { tag: "script", attrs: { type: "module", src: "js/customElements/bottom-navbar.js" }, injectTo: "body" },
                    ]
                };
            }
        }
    }
}