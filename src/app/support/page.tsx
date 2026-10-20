import type { Metadata } from "next";
import Link from "next/link";
import { Legal } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact Casual Fit for account help, privacy requests, and questions about the app.",
};

export default function SupportPage() {
  return (
    <Legal
      kicker="Support"
      title="Write to us"
      lede="The app is not in the stores yet. Email is the way to reach us until in-app support is there."
    >
      <p>
        <a className="support-mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <h2>What to include</h2>
      <p>Your account email, what you expected to happen, and what happened instead. If a workout or a meal looked wrong, name the exercise or the food.</p>
      <h2>Privacy requests</h2>
      <p>
        For a copy of your data, a correction, or deletion, email us from the address on the account.
        The <Link href="/privacy">privacy policy</Link> says what we hold. The{" "}
        <Link href="/terms">terms</Link> say what the app is, and what it is not.
      </p>
      <h2>Stores</h2>
      <p>
        App Store and Google Play buttons on the home page are placeholders. They open the stores,
        not a Casual Fit listing. The listing links will replace them when the apps ship.
      </p>
    </Legal>
  );
}
