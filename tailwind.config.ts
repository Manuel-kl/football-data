/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        colors: {
          "main-green": "#42c56c",
          "grass-green": "#7ed957",
          yellow: "#ffde59",
          teal: "#57d9d9",
          "tile-bg-color": "#111",
          "tile-bg-color-active": "#181818",
          "main-bg-color": "#181818",
          "dark-blue-tile": "#111",
        },
        fontFamily: {
          base: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
          ],
          roboto: [
            "InterVariable",
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "Noto Sans",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji",
          ],
        },
      },
    },
    plugins: [],
  }
  