"use client";

export default function SavePdfButton() {
  return (
    <button className="save-pdf-btn" onClick={() => window.print()}>
      Save as PDF <span aria-hidden="true">↓</span>
    </button>
  );
}
