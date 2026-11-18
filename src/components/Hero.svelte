<section class="hero" aria-labelledby="hero-title">
  <div class="shell hero-inner">
    <div class="hero-copy">
      <h1 id="hero-title">
        <span class="line"><span class="line-inner accent">High-precision</span></span>
        <span class="line"><span class="line-inner">macros for</span></span>
        <span class="line"><span class="line-inner">Geometry Dash.</span></span>
      </h1>

      <p class="lede hero-lede">
        Xenon records your inputs and replays them with high precision. CBF, a
        macro editor, and a frame stepper - all inside one lightweight Geode mod.
      </p>

      <div class="hero-actions">
        <a
          class="btn btn--primary"
          href="https://discord.gg/rDhuzHp3Xe"
          target="_blank"
          rel="noopener"
        >
          <span class="icon icon-discord icon-18" aria-hidden="true"></span>
          Download on Discord
        </a>
        <a
          class="btn btn--outlined"
          href="https://github.com/Baleszka/Xenon"
          target="_blank"
          rel="noopener"
        >
          <span class="icon icon-github icon-17" aria-hidden="true"></span>
          View source
        </a>
        <a
            class="btn btn--outlined"
            href="https://ko-fi.com/baleszkadev"
            target="_blank"
            rel="noopener"
          >
            <span class="icon icon-kofi icon-17" aria-hidden="true"></span>
            Donate
          </a>
      </div>

      <p class="hero-note">Free and open source | Built for Geode</p>
    </div>

    <figure class="hero-shot">
      <img
        src="/menu.png"
        alt="Xenon's in-game menu with Replay, Assist, Macro editor, Calculator, and Settings tabs."
        width="565"
        height="400"
        fetchpriority="high"
        decoding="async"
      />
    </figure>
  </div>
</section>

<style>
  .hero {
    position: relative;
    overflow: clip;
    padding: clamp(56px, 8vw, 96px) 0 clamp(44px, 6vw, 68px);
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
    align-items: center;
    gap: clamp(36px, 5vw, 72px);
  }

  .hero-copy {
    min-width: 0;
  }

  .hero-shot {
    justify-self: end;
    width: 100%;
    max-width: 560px;
    margin: 0;
    padding: 6px;
    border: 1px solid color-mix(in srgb, var(--outline-variant) 80%, transparent);
    border-radius: 20px;
    background: var(--surface-container);
    box-shadow: var(--shadow);
    animation: shot-in 800ms var(--ease-out) 220ms both;
  }

  .hero-shot img {
    width: 100%;
    height: auto;
    border-radius: 14px;
  }

  @keyframes shot-in {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.985);
      filter: blur(5px);
    }
  }

  h1 {
    margin-top: 22px;
    font-size: clamp(2.8rem, 5vw + 1rem, 4.75rem);
    font-weight: 600;
    letter-spacing: -0.045em;
    line-height: 0.99;
  }

  .line {
    display: block;
    overflow: hidden;
    padding-bottom: 0.06em;
    margin-bottom: -0.06em;
  }

  .line-inner {
    display: block;
    transform: translateY(112%);
    animation: line-in 760ms var(--ease-out) both;
  }

  .line:nth-child(1) .line-inner {
    animation-delay: 120ms;
  }

  .line:nth-child(2) .line-inner {
    animation-delay: 190ms;
  }

  .line:nth-child(3) .line-inner {
    animation-delay: 260ms;
  }

  .accent {
    color: var(--primary);
  }

  @keyframes line-in {
    to {
      transform: translateY(0);
    }
  }

  @keyframes copy-in {
    from {
      opacity: 0;
      transform: translateY(12px);
      filter: blur(4px);
    }
    to {
      opacity: 1;
      transform: none;
      filter: none;
    }
  }

  .hero-lede {
    margin-top: 24px;
    max-width: 46ch;
    animation: copy-in 650ms var(--ease-out) 330ms both;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 32px;
    animation: copy-in 650ms var(--ease-out) 410ms both;
  }

  .hero-note {
    margin-top: 18px;
    color: var(--on-surface-variant);
    font-size: 0.8125rem;
    letter-spacing: 0.005em;
    opacity: 0.9;
    animation: copy-in 650ms var(--ease-out) 480ms both;
  }

  @media (max-width: 960px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 44px;
    }

    .hero-copy {
      max-width: 700px;
    }

    .hero-shot {
      justify-self: start;
      max-width: 620px;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding-top: 42px;
    }

    h1 {
      margin-top: 18px;
      letter-spacing: -0.04em;
    }

    .hero-lede {
      margin-top: 20px;
      font-size: 1rem;
    }

    .hero-actions {
      margin-top: 26px;
    }

    .hero-actions .btn {
      flex: 1 1 auto;
      min-width: 0;
      padding-inline: 18px;
    }
  }

  @media (max-width: 380px) {
    .hero-actions .btn {
      flex-basis: 100%;
    }
  }

  @media (max-width: 340px) {
    h1 {
      font-size: 2.6rem;
    }
  }
</style>
