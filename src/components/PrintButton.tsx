"use client";

export default function PrintButton() {
  return (
    <button className="print-btn" onClick={() => window.print()}>
      Print / save as PDF <span aria-hidden="true">↓</span>
    </button>
  );
}
