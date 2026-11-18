<script>
  const keys = [
    { key: "F", label: "open the menu" },
  ];
</script>

<section id="get-started" class="section" aria-labelledby="cta-title">
  <div class="shell">
    <div class="cta-card">
      <div class="cta-copy">
        <p class="eyebrow">Get started</p>
        <h2 id="cta-title">Convinced?</h2>
        <p class="lede">
          Grab the latest build from the Discord!
        </p>
        <div class="cta-actions">
          <a
            class="btn btn--primary"
            href="https://discord.gg/rDhuzHp3Xe"
            target="_blank"
            rel="noopener"
          >
            <span class="icon icon-discord icon-18" aria-hidden="true"></span>
            Join the Discord
          </a>
          <a
            class="btn btn--outlined"
            href="https://github.com/Baleszka/Xenon"
            target="_blank"
            rel="noopener"
          >
            <span class="icon icon-github icon-17" aria-hidden="true"></span>
            View on GitHub
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
      </div>

      <div class="key-cluster" aria-hidden="true">
        {#each keys as item, i (item.key)}
          <span class="key-unit" style={`--i:${i}`}>
            <kbd>{item.key}</kbd>
            <span class="key-label mono">{item.label}</span>
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    padding: clamp(36px, 5vw, 64px) 0 clamp(64px, 8vw, 104px);
  }

  .cta-card {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.75fr);
    align-items: center;
    gap: clamp(32px, 5vw, 72px);
    overflow: hidden;
    padding: clamp(28px, 5vw, 64px);
    border: 1px solid color-mix(in srgb, var(--primary) 24%, var(--outline-variant));
    border-radius: var(--radius-xl);
    background: color-mix(in srgb, var(--primary-container) 23%, var(--surface-low));
  }

  .cta-copy {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .cta-copy h2 {
    max-width: 17ch;
  }

  .cta-copy .lede {
    max-width: 46ch;
  }

  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }

  .key-cluster {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    gap: clamp(10px, 2vw, 18px);
  }

  .key-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transform: translateY(calc((var(--i) - 1) * 6px));
  }

  .key-unit kbd {
    display: grid;
    place-items: center;
    width: clamp(128px, 7vw, 76px);
    height: clamp(128px, 7vw, 76px);
    border: 1px solid color-mix(in srgb, var(--primary) 26%, var(--outline-variant));
    border-bottom-width: 4px;
    border-radius: 18px;
    background: color-mix(in srgb, var(--surface-lowest) 72%, transparent);
    color: var(--on-surface);
    font-family: var(--font-mono);
    font-size: clamp(4rem, 2vw, 1.625rem);
    font-weight: 500;
    line-height: 1;
    box-shadow: var(--shadow-soft);
  }

  .key-label {
    color: var(--on-surface-variant);
    font-size: 0.625rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: 820px) {
    .cta-card {
      grid-template-columns: 1fr;
    }

    .key-cluster {
      justify-content: flex-start;
    }

    .key-unit {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    .cta-actions {
      width: 100%;
    }

    .cta-actions .btn {
      flex: 1 1 auto;
    }

    .key-cluster {
      display: none;
    }
  }
</style>
