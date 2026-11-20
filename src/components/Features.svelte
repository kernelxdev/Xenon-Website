<script>
  import { reveal } from "../lib/reveal.js";
</script>

<section id="features" class="section" aria-labelledby="features-title">
  <div class="shell">
    <div class="section-head" use:reveal>
      <p class="eyebrow">Features</p>
      <h2 id="features-title">Everything you need to bot a level.</h2>
      <p class="lede">
        Record inputs, inspect the macro, and replay with CBF
      </p>
    </div>

    <div class="bento">

      <article class="feature" use:reveal={{ delay: 80 }}>
        <div class="feature-copy">
          <span class="icon-well"><span class="icon icon-frame icon-21" aria-hidden="true"></span></span>
          <h3>CBF support</h3>
          <p>
            Click-between-frames is built in natively, so you can calculate timings with absolute accuracy.
          </p>
        </div>
      </article>

      <article class="feature" use:reveal={{ delay: 160 }}>
        <div class="feature-copy">
          <span class="icon-well"><span class="icon icon-bolt icon-21" aria-hidden="true"></span></span>
          <h3>Lightweight by design</h3>
          <p>
            Made with light solutions and performance in mind.
            It's only 600 KB (&lt;1MB)
          </p>
        </div>
      </article>

      <article class="feature" use:reveal={{ delay: 240 }}>
        <div class="feature-copy">
          <span class="icon-well"><span class="icon icon-edit icon-21" aria-hidden="true"></span></span>
          <h3>Macro editor</h3>
          <p>
            Review saved macros and tighten your inputs in the built-in editor.
          </p>
        </div>
      </article>

      <article class="feature" use:reveal={{ delay: 320 }}>
        <div class="feature-copy">
          <span class="icon-well"><span class="icon icon-calculator icon-21" aria-hidden="true"></span></span>
          <h3>Frame windows, calculated</h3>
          <p>
            The built-in timing calculator turns the first and last frame
            to a frame window with decimal points and the amount of time
            to perform the timing in miliseconds.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<style>
  .section {
    padding: clamp(56px, 7vw, 88px) 0 clamp(32px, 4vw, 48px);
  }

  .section-head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    max-width: 720px;
    margin-bottom: clamp(32px, 4vw, 48px);
  }

  .section-head h2 {
    max-width: 20ch;
  }

  .section-head .lede {
    max-width: 54ch;
  }

  .bento {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .feature {
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 0;
    padding: 26px;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--outline-variant) 66%, transparent);
    border-radius: var(--radius-lg);
    background: var(--surface-low);
  }

  .feature-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .icon-well {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    margin-bottom: 18px;
    border-radius: 14px;
    background: color-mix(in srgb, var(--primary) 12%, var(--surface-container));
    color: var(--primary);
  }

  .feature h3 {
    max-width: 24ch;
    margin-bottom: 8px;
  }

  .feature p {
    max-width: 42ch;
    color: var(--on-surface-variant);
    font-size: 0.9375rem;
    line-height: 1.65;
    text-wrap: pretty;
  }

  @media (max-width: 700px) {
    .bento {
      grid-template-columns: 1fr;
    }

    .feature {
      padding: 22px;
    }
  }
</style>
