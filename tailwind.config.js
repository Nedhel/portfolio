/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#292C33",
                secondary: "#212329",
                terciary: "#00ccff",
            },
            screens: {
                sm: "360px",
                // => @media (min-width: 992px) { ... }
            },
            animation: {
                animate1: "animate1 20s linear infinite",
                animate2: "animate2 20s linear infinite",
                animate3: "animate3 20s linear infinite",
                animate4: "animate4 20s linear infinite",
            },
            keyframes: {
                animate1: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                animate2: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                animate3: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                animate4: {
                    "0%": { transform: "translateX(-200%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [],
};
