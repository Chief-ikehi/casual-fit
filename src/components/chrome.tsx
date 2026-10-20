import Image from "next/image";
import Link from "next/link";
import { nav, site, stores } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link href="/" className="brand">
          <Image src="/logo-mark.png" alt="Casual Fit" width={586} height={361} priority />
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
            <Image src="/logo-lockup.png" alt="Casual Fit" width={988} height={655} />
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

function AppleLogo() {
  return (
    <svg className="store-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg className="store-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M1.22 1.05C.93 1.35.75 1.84.75 2.5v19c0 .66.18 1.15.47 1.45l.08.07 10.64-10.64v-.25L1.3.98l-.08.07z"
      />
      <path
        fill="#34A853"
        d="M16.02 15.27l-3.08-3.08v-.25l3.08-3.08.07.04 3.65 2.07c1.04.59 1.04 1.56 0 2.15l-3.65 2.07-.07.04z"
      />
      <path fill="#FBBC04" d="M16.09 15.23l-3.15-3.15L1.22 21.8c.42.44 1.11.49 1.89.05l12.98-6.62" />
      <path fill="#EA4335" d="M16.09 8.77 3.11 2.15C2.33 1.71 1.64 1.76 1.22 2.2l11.72 11.72 3.15-3.15z" />
    </svg>
  );
}

export function StoreLinks() {
  return (
    <div className="stores">
      <a className="store" href={stores.apple} target="_blank" rel="noopener noreferrer">
        <AppleLogo />
        <span>
          <small>Listing at launch</small>
          <strong>App Store</strong>
        </span>
      </a>
      <a className="store" href={stores.google} target="_blank" rel="noopener noreferrer">
        <PlayLogo />
        <span>
          <small>Listing at launch</small>
          <strong>Google Play</strong>
        </span>
      </a>
    </div>
  );
}
