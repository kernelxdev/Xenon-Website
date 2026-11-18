<footer class="footer">
  <div class="shell">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="brand" href="/" aria-label="Xenon home">
          <img src="/logo.png" alt="" width="30" height="30" />
          <span>Xenon</span>
        </a>
        <p>A lightweight, advanced bot for Geometry Dash.</p>
      </div>

      <nav class="footer-links" aria-label="Explore">
        <p class="footer-label">Explore</p>
        <a href="#features">Features</a>
      </nav>

      <nav class="footer-links" aria-label="Community">
        <p class="footer-label">Community</p>
        <a href="https://discord.gg/rDhuzHp3Xe" target="_blank" rel="noopener">
          <span class="icon icon-discord icon-15" aria-hidden="true"></span>
          Discord
        </a>
        <a href="https://github.com/Baleszka/Xenon" target="_blank" rel="noopener">
          <span class="icon icon-github icon-14" aria-hidden="true"></span>
          GitHub
        </a>
        <a href="https://github.com/Baleszka/Xenon/issues" target="_blank" rel="noopener">
          <span class="icon icon-arrow-up-right icon-14" aria-hidden="true"></span>
          Report an issue
        </a>
      </nav>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Xenon</p>
      <p>
        Site by
        <a href="https://github.com/kernelxdev" target="_blank" rel="noopener">Kernel</a>,
        Xenon by
        <a href="https://github.com/baleszka" target="_blank" rel="noopener">Baleszka</a>
      </p>
      <p class="disclaimer">Not affiliated with RobTop Games.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid color-mix(in srgb, var(--outline-variant) 55%, transparent);
  }

  .footer-top {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 0.6fr) minmax(0, 0.8fr);
    gap: 40px;
    padding: clamp(40px, 5vw, 56px) 0;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .brand img {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--outline-variant) 65%, transparent);
  }

  .footer-brand p {
    max-width: 32ch;
    color: var(--on-surface-variant);
    font-size: 0.875rem;
    line-height: 1.6;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;
  }

  .footer-label {
    margin-bottom: 2px;
    color: var(--on-surface-variant);
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.8;
  }

  .footer-links a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--on-surface-variant);
    font-size: 0.875rem;
    transition: color 160ms var(--ease-out);
  }

  .footer-links a:hover {
    color: var(--on-surface);
  }

  .footer-links .icon {
    opacity: 0.7;
  }

  .footer-bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px 28px;
    padding: 20px 0 28px;
    border-top: 1px solid color-mix(in srgb, var(--outline-variant) 40%, transparent);
    color: var(--on-surface-variant);
    font-size: 0.75rem;
    font-variant-numeric: tabular-nums;
  }

  .footer-bottom a {
    color: var(--on-surface);
    text-decoration: underline;
    text-decoration-color: color-mix(in srgb, var(--outline) 70%, transparent);
    text-underline-offset: 3px;
    transition: text-decoration-color 160ms var(--ease-out);
  }

  .footer-bottom a:hover {
    text-decoration-color: var(--on-surface);
  }

  .disclaimer {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    .footer-top {
      grid-template-columns: 1fr 1fr;
      gap: 32px 24px;
    }

    .footer-brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 420px) {
    .footer-bottom {
      justify-content: flex-start;
    }
  }
</style>
