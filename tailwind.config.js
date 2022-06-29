const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            width:{
                '120':'30rem'
            },
            inset:{
                '112.5':'28.5rem'
            },
        },
    },
    variant: {
        extends: {
            opacity: ["disabled"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require('flowbite/plugin')
    ],
};
