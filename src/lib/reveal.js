export function reveal(node, options = {}) {
  const { delay = 0, threshold = 0.15 } = options;

  node.classList.add("reveal");

  if (delay > 0) {
    node.style.setProperty("--reveal-delay", `${delay}ms`);
  }

  if (
    typeof window === "undefined" ||
    typeof IntersectionObserver === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    node.classList.add("is-revealed");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        node.classList.add("is-revealed");
        observer.disconnect();
        break;
      }
    },
    {
      threshold,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
