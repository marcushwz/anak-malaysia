import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["moon", "sun"];

  connect() {
    const root = document.documentElement;
    const theme = localStorage.theme;

    if (!theme) {
      // default to light
      const defaultTheme = "light";
      localStorage.theme = defaultTheme;
      root.classList.add(defaultTheme);
      this.showMoon();
    } else {
      theme === "dark" ? this.showSun() : this.showMoon();
      root.classList.add(theme);
    }
  }

  toggle() {
    const currentTheme = localStorage.theme;
    const root = document.documentElement;

    if (currentTheme === "light") {
      root.classList.add("dark");
      localStorage.theme = "dark";
      this.showSun();
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
      this.showMoon();
    }
  }

  showSun() {
    const moon = this.moonTarget;
    const sun = this.sunTarget;
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
  }

  showMoon() {
    const moon = this.moonTarget;
    const sun = this.sunTarget;
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
  }
}
