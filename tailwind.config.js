/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,js,ts,jsx,tsx}",
        "./js/*.{html,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'navbar-blue': '#2196f3',
                'zelf-background-color': '#282a2e',
                'lightgrey-blue': '#4e86b0',
            },
            backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
