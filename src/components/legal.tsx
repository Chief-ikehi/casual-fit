import type { ReactNode } from "react";
import { Footer, Header } from "@/components/chrome";

export function Legal({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="legal wrap">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="standfirst">{lede}</p>
        <div className="legal-body">{children}</div>
      </main>
      <Footer />
    </>
  );
}
