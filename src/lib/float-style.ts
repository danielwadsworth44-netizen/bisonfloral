import type { CSSProperties } from "react";

/** Staggered entrance: pair with `.float-in` in `globals.css`; step scales delay. */
export function floatStyle(step: number): { className: string; style: CSSProperties } {
  return {
    className: "float-in",
    style: { "--float-i": step } as CSSProperties,
  };
}
