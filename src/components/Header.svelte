<script>
  import { onMount, tick } from "svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  const links = [
    { id: "features", label: "Features" },
    { id: "get-started", label: "Download" },
  ];

  let menuOpen = $state(false);
  let hovered = $state(null);
  let active = $state("");
  let scrolled = $state(false);

  let headerEl;
  let navEl;
  let panelEl;
  let triggerEl;
  let indicatorEl;
  let menuFocusTimer;

  function placeIndicator(id) {
    if (!navEl || !indicatorEl) return;
    const link = id ? navEl.querySelector(`[data-section="${id}"]`) : null;
    if (!link) {
      indicatorEl.style.opacity = "0";
      return;
    }
    const navRect = navEl.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    indicatorEl.style.width = `${linkRect.width}px`;
    indicatorEl.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
    indicatorEl.style.opacity = "1";
  }

  function showIndicator(id) {
    hovered = id;
    placeIndicator(id);
  }

  function clearHover() {
    hovered = null;
    placeIndicator(active);
  }

  function syncActiveSection() {
    const marker = window.innerHeight * 0.38;
    let current = "";
    for (const link of links) {
      const section = document.getElementById(link.id);
      if (section && section.getBoundingClientRect().top <= marker) {
        current = link.id;
      }
    }
    active = current;
    if (!hovered) placeIndicator(current);
  }

  let scrollQueued = false;
  function handleScroll() {
    scrolled = window.scrollY > 8;
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      scrollQueued = false;
      syncActiveSection();
    });
  }

  function handleResize() {
    if (window.innerWidth > 880) closeMenu(false);
    placeIndicator(hovered ?? active);
    syncActiveSection();
    requestAnimationFrame(() => placeIndicator(hovered ?? active));
  }

  async function openMenu() {
    menuOpen = true;
    await tick();
    if (!menuOpen) return;
    clearTimeout(menuFocusTimer);
    menuFocusTimer = setTimeout(() => {
      if (!menuOpen) return;
      const firstLink = panelEl?.querySelector("a");
      firstLink?.focus({ preventScroll: true });
      if (document.activeElement !== firstLink) {
        panelEl?.focus({ preventScroll: true });
      }
    }, 220);
  }

  function closeMenu(returnFocus = false) {
    if (!menuOpen) return;
    menuOpen = false;
    clearTimeout(menuFocusTimer);
    if (returnFocus) triggerEl?.focus({ preventScroll: true });
  }

  function toggleMenu() {
    if (menuOpen) closeMenu(true);
    else openMenu();
  }

  function handleWindowClick(event) {
    if (menuOpen && headerEl && !headerEl.contains(event.target)) {
      closeMenu(false);
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape" && menuOpen) closeMenu(true);
  }

  onMount(() => {
    handleScroll();
    syncActiveSection();
    requestAnimationFrame(() => {
      syncActiveSection();
      placeIndicator(active);
    });

    document.fonts?.ready.then(() => {
      syncActiveSection();
      placeIndicator(hovered ?? active);
    });
  });
</script>

<svelte:window
  onscroll={handleScroll}
  onresize={handleResize}
  onclick={handleWindowClick}
  onkeydown={handleKeydown}
/>

<header class="appbar" class:scrolled bind:this={headerEl}>
  <div class="shell appbar-inner">
    <a class="brand" href="/" aria-label="Xenon home">
      <img src="/logo.png" alt="" width="34" height="34" />
      <span>Xenon</span>
    </a>

    <nav class="nav-links" bind:this={navEl} aria-label="Primary">
      <span class="nav-indicator" bind:this={indicatorEl} aria-hidden="true"></span>
      {#each links as link (link.id)}
        <a
          href={`#${link.id}`}
          data-section={link.id}
          class:active={active === link.id}
          aria-current={active === link.id ? "true" : undefined}
          onpointerenter={() => showIndicator(link.id)}
          onfocus={() => showIndicator(link.id)}
          onblur={clearHover}
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <div class="appbar-actions">
      <ThemeToggle />
      <a
        class="btn btn--primary btn--sm appbar-cta"
        href="https://discord.gg/rDhuzHp3Xe"
        target="_blank"
        rel="noopener"
        aria-label="Get Xenon on Discord"
      >
        Get Xenon
        <span class="icon icon-arrow-up-right icon-16" aria-hidden="true"></span>
      </a>
      <button
        type="button"
        class="icon-btn menu-btn"
        bind:this={triggerEl}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onclick={toggleMenu}
      >
        <span class="menu-glyph" class:open={menuOpen} aria-hidden="true">
          <span class="glyph glyph-menu"><span class="icon icon-menu icon-22" aria-hidden="true"></span></span>
          <span class="glyph glyph-close"><span class="icon icon-close icon-22" aria-hidden="true"></span></span>
        </span>
      </button>
    </div>

    <div
      class="mobile-panel"
      class:open={menuOpen}
      id="mobile-menu"
      bind:this={panelEl}
      tabindex="-1"
      aria-hidden={!menuOpen}
    >
      <nav aria-label="Mobile">
        {#each links as link, i (link.id)}
          <a
            class="mobile-link"
            style={`--i:${i}`}
            href={`#${link.id}`}
            onclick={() => closeMenu(false)}
          >
            {link.label}
            <span class="icon icon-arrow-right icon-18" aria-hidden="true"></span>
          </a>
        {/each}
      </nav>
      <a
        class="btn btn--primary mobile-cta"
        href="https://discord.gg/rDhuzHp3Xe"
        target="_blank"
        rel="noopener"
        onclick={() => closeMenu(false)}
      >
        Get Xenon on Discord
        <span class="icon icon-discord icon-17" aria-hidden="true"></span>
      </a>
    </div>
  </div>
</header>

<style>
  .appbar {
    position: sticky;
    top: 0;
    z-index: 60;
    border-bottom: 1px solid transparent;
    transition: background-color 300ms var(--ease-out),
      border-color 300ms var(--ease-out);
  }

  .appbar.scrolled {
    border-bottom-color: color-mix(
      in srgb,
      var(--outline-variant) 70%,
      transparent
    );
    background: var(--header-bg);
    backdrop-filter: blur(20px) saturate(140%);
  }

  .appbar-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    height: var(--header-h);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    flex: none;
    font-family: var(--font-display);
    font-size: 1.0625rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .brand img {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--outline-variant) 70%, transparent);
  }

  .nav-links {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2px;
    height: 40px;
  }

  .nav-indicator {
    position: absolute;
    top: 2px;
    left: 0;
    width: 0;
    height: 36px;
    border-radius: var(--radius-full);
    background: var(--surface-high);
    opacity: 0;
    pointer-events: none;
    transition: transform 260ms var(--ease-in-out),
      width 260ms var(--ease-in-out), opacity 200ms var(--ease-out);
  }

  .nav-links a {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 14px;
    border-radius: var(--radius-full);
    color: var(--on-surface-variant);
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 180ms var(--ease-out);
  }

  .nav-links a:hover {
    color: var(--on-surface);
  }

  .nav-links a.active {
    color: var(--primary);
  }

  .appbar-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: none;
  }

  .menu-btn {
    display: none;
  }

  .menu-glyph {
    display: grid;
    place-items: center;
  }

  .glyph {
    grid-area: 1 / 1;
    display: grid;
    place-items: center;
    transition: opacity 200ms var(--ease-in-out),
      transform 200ms var(--ease-in-out), filter 200ms var(--ease-in-out);
  }

  .glyph-menu {
    opacity: 1;
    transform: rotate(0deg) scale(1);
    filter: blur(0);
  }

  .glyph-close {
    opacity: 0;
    transform: rotate(-40deg) scale(0.82);
    filter: blur(3px);
  }

  .menu-glyph.open .glyph-menu {
    opacity: 0;
    transform: rotate(40deg) scale(0.82);
    filter: blur(3px);
  }

  .menu-glyph.open .glyph-close {
    opacity: 1;
    transform: rotate(0deg) scale(1);
    filter: blur(0);
  }

  .mobile-panel {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 2;
    width: min(320px, calc(100vw - 32px));
    padding: 8px;
    border: 1px solid var(--outline-variant);
    border-radius: 20px;
    background: var(--surface-container);
    box-shadow: var(--shadow);
    transform: translateY(-6px) scale(0.95);
    transform-origin: top right;
    opacity: 0;
    visibility: hidden;
    backdrop-filter: blur(24px);
    transition: opacity 160ms var(--ease-in),
      transform 160ms var(--ease-in), visibility 0s linear 160ms;
  }

  .mobile-panel.open {
    transform: none;
    opacity: 1;
    visibility: visible;
    transition: opacity 200ms var(--ease-out),
      transform 200ms var(--ease-out), visibility 0s linear 0s;
  }

  .mobile-panel:focus {
    outline: none;
  }

  .mobile-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 12px;
    color: var(--on-surface);
    font-weight: 500;
    opacity: 0;
    transform: translateY(-4px);
    transition: background-color 160ms var(--ease-out),
      opacity 160ms var(--ease-in), transform 160ms var(--ease-in);
  }

  .mobile-link:hover {
    background: var(--surface-high);
  }

  .mobile-link .icon {
    color: var(--on-surface-variant);
  }

  .mobile-panel.open .mobile-link {
    opacity: 1;
    transform: none;
    transition: background-color 160ms var(--ease-out),
      opacity 240ms var(--ease-out), transform 240ms var(--ease-out);
    transition-delay: 0ms, calc(70ms + var(--i) * 30ms),
      calc(70ms + var(--i) * 30ms);
  }

  .mobile-cta {
    width: 100%;
    margin-top: 6px;
    opacity: 0;
    transform: translateY(-4px);
    transition: opacity 160ms var(--ease-in), transform 160ms var(--ease-in);
  }

  .mobile-panel.open .mobile-cta {
    opacity: 1;
    transform: none;
    transition: opacity 240ms var(--ease-out) 170ms,
      transform 240ms var(--ease-out) 170ms;
  }

  @media (max-width: 880px) {
    .nav-links,
    .appbar-cta {
      display: none;
    }

    .menu-btn {
      display: inline-grid;
    }
  }

</style>
