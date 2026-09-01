import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="detail content" id="main">
      <div className="detail-inner">
        <Link href="/" className="back">
          <span aria-hidden="true">←</span> Home
        </Link>

        <span className="eyebrow">404</span>
        <h1>Off course.</h1>
        <p className="lede">
          This page doesn&rsquo;t exist, or it has moved. Try the{" "}
          <Link href="/#work">work</Link>, the <Link href="/resume">resume</Link>, or head back{" "}
          <Link href="/">home</Link>.
        </p>
      </div>
    </main>
  );
}
