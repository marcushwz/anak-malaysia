import { Controller } from "stimulus";

export default class extends Controller {
  initialize() {
    const root = document.documentElement;
    const theme = localStorage.theme;
    if (!theme) {
      // default to light
      const defaultTheme = "light";
      localStorage.theme = defaultTheme;
      root.classList.add(defaultTheme);
    } else {
      root.classList.add(theme);
    }
  }

  toggle() {
    const currentTheme = localStorage.theme;
    const root = document.documentElement;
    if (currentTheme === "light") {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }
}
