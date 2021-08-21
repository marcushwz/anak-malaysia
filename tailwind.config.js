module.exports = {
  mode: "jit",
  purge: ["./app/**/*.html.erb", "./app/helpers/**/*.rb", "./app/javascript/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        nord: {
          night: {
            lighter: "#3b4252",
            light: "#39404f",
            DEFAULT: "#2e3440",
            dark: "#292e39",
          },
          snow: {
            light: "#eceff4",
            DEFAULT: "#e5e9f0",
            dark: "#d8dee9",
          },
          primary: {
            light: "#95c7d5",
            DEFAULT: "#88c0d0",
            dark: "#7cbacb",
          },
          frost: {
            light: "#8fbcbb",
            DEFAULT: "#81a1c1",
            dark: "#5e81ac",
          },
          red: "#bf616a",
          orange: "#d08770",
          yellow: "#ebcb8b",
          green: "#a3be8c",
          purple: "#b48ead",
        },
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover"],
    },
  },
  plugins: [],
};
