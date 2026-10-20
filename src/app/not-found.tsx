import Link from "next/link";
import { Footer, Header } from "@/components/chrome";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="content" className="lost wrap">
        <p className="kicker">404</p>
        <h1>Nothing is scheduled here.</h1>
        <p>
          <Link href="/">Back to the programme</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
