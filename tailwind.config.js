/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./Components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            transitionDuration: {
                '2000': '2000ms',
            }
        },
    },
    plugins: [],
};
