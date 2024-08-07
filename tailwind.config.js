/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,js,ts,jsx,tsx}",
        "./js/**/*.{html,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                'navbar-blue': '#2196f3',
                'lightgrey-blue': '#4e86b0',
                'secondary-color': 'var(--secondary-color)',
                'secondary-background-color': 'var(--secondary-background-color)',
                'third-background-color': 'var(--third-background-color)',
                'box-background-color': 'var(--box-background-color)'
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
