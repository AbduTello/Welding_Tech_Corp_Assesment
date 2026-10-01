// Shared link and button styles, so a brand tweak is one edit.
// Each button variant sets its own focus outline colour, chosen to stay
// visible against the background that variant sits on.

export const BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export const BUTTON_PRIMARY = `${BUTTON} bg-brand text-white hover:bg-brand/90 focus-visible:outline-navy`;

export const BUTTON_SECONDARY = `${BUTTON} ring-1 ring-navy/40 hover:bg-navy/5 focus-visible:outline-navy`;

// Underlined text link; inherits its colour, so it works on light and dark bands
export const TEXT_LINK =
  "inline-block font-medium underline decoration-brand decoration-2 underline-offset-[6px] transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current motion-reduce:transition-none";
