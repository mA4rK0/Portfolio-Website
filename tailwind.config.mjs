/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#001F3F",
        secondary: "#3692FA",
      },
      backgroundImage: {
        "custom-image": "url('public/assets/programming.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
