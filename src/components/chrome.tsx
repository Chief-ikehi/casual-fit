import Image from "next/image";
import Link from "next/link";
import { nav, site, stores } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link href="/" className="brand">
          <Image src="/logo-wordmark.png" alt="Casual Fit" width={987} height={169} priority />
        </Link>
        <nav className="nav" aria-label="On this site">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-bar">
          <Link href="/" className="footer-brand">
            <Image src="/logo-wordmark.png" alt="" width={987} height={169} />
          </Link>
          <nav className="footer-links" aria-label="Policies">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>
        <p className="fine">
          Casual Fit gives training and food estimates. It is not medical advice, and it does not
          diagnose injury. Store buttons open Apple and Google until the Casual Fit listings are
          live.
        </p>
      </div>
    </footer>
  );
}

export function StoreLinks() {
  return (
    <div className="stores">
      <a className="store" href={stores.apple} target="_blank" rel="noopener noreferrer">
        <small>Listing at launch</small>
        <strong>App Store</strong>
      </a>
      <a className="store" href={stores.google} target="_blank" rel="noopener noreferrer">
        <small>Listing at launch</small>
        <strong>Google Play</strong>
      </a>
    </div>
  );
}
