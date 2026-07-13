// Shared Framer Motion constants so animation timing stays consistent across
// sections. Consumed by components/ui/Reveal.jsx.

export const EASE = [0.22, 1, 0.36, 1];

// Shared viewport config: animate once, trigger a little before fully in view.
export const viewportOnce = { once: true, amount: 0.2 };
