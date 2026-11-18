<script>
  import { onMount } from "svelte";

  let theme = $state("dark");

  onMount(() => {
    theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
  });

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0c0e13" : "#f8f8fc");

    try {
      localStorage.setItem("xenon-theme", theme);
    } catch {
      /* storage may be unavailable */
    }
  }
</script>

<button
  type="button"
  class="theme-switch"
  role="switch"
  aria-checked={theme === "light"}
  aria-label="Light theme"
  onclick={toggleTheme}
>
  <span class="track-tick" aria-hidden="true"></span>
  <span class="thumb" aria-hidden="true">
    <span class="thumb-icon moon"><span class="icon icon-moon icon-14" aria-hidden="true"></span></span>
    <span class="thumb-icon sun"><span class="icon icon-sun icon-14" aria-hidden="true"></span></span>
  </span>
</button>

<style>
  .theme-switch {
    position: relative;
    flex: none;
    width: 56px;
    height: 32px;
    padding: 0;
    border: 1px solid var(--outline-variant);
    border-radius: var(--radius-full);
    background: var(--surface-high);
    transition: background-color 220ms var(--ease-in-out),
      border-color 220ms var(--ease-in-out), transform 120ms var(--ease-out);
  }

  .theme-switch:active {
    transform: scale(0.97);
  }

  .theme-switch[aria-checked="true"] {
    border-color: transparent;
    background: var(--primary);
  }

  .thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border-radius: var(--radius-full);
    background: var(--surface-lowest);
    color: var(--on-surface-variant);
    box-shadow: var(--shadow-soft);
    transform: translateX(0);
    transition: transform 250ms var(--ease-in-out),
      width 160ms var(--ease-out), background-color 220ms var(--ease-in-out),
      color 220ms var(--ease-in-out);
  }

  .theme-switch[aria-checked="true"] .thumb {
    background: var(--on-primary);
    color: var(--primary);
    transform: translateX(24px);
  }

  .theme-switch:active .thumb {
    width: 27px;
    background: color-mix(
      in srgb,
      var(--surface-lowest) 85%,
      var(--on-surface) 15%
    );
  }

  .theme-switch[aria-checked="true"]:active .thumb {
    width: 27px;
    background: var(--on-primary);
  }

  .thumb-icon {
    position: absolute;
    display: grid;
    place-items: center;
    transition: opacity 200ms var(--ease-in-out),
      filter 200ms var(--ease-in-out), transform 200ms var(--ease-in-out);
  }

  .moon {
    opacity: 1;
    filter: blur(0);
    transform: rotate(0deg) scale(1);
  }

  .sun {
    opacity: 0;
    filter: blur(3px);
    transform: rotate(-40deg) scale(0.82);
  }

  .theme-switch[aria-checked="true"] .moon {
    opacity: 0;
    filter: blur(3px);
    transform: rotate(40deg) scale(0.82);
  }

  .theme-switch[aria-checked="true"] .sun {
    opacity: 1;
    filter: blur(0);
    transform: rotate(0deg) scale(1);
  }

  .track-tick {
    position: absolute;
    top: 50%;
    right: 12px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--outline);
    opacity: 0.55;
    transform: translateY(-50%);
    transition: opacity 200ms var(--ease-in-out);
  }

  .theme-switch[aria-checked="true"] .track-tick {
    opacity: 0;
  }
</style>
