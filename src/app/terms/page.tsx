import type { Metadata } from "next";
import Link from "next/link";
import { Legal } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms for using Casual Fit. The app is a training tool, not medical care.",
};

export default function TermsPage() {
  return (
    <Legal
      kicker={`Terms · ${site.updated}`}
      title="Terms of use"
      lede="These terms cover the Casual Fit app and this website. They describe the product we are building. Have them reviewed before the app is offered to the public."
    >
      <h2>The service</h2>
      <p>
        Casual Fit is a training tool. It suggests a programme, shows how to do the exercises, helps
        you log food, and shows whether your training is moving. It is for adults who want a simple
        daily plan, at a gym or at home.
      </p>
      <p>
        The store listings are not live yet. Buttons on this site open Apple’s App Store and Google
        Play as placeholders until Casual Fit is listed there.
      </p>

      <h2>Not medical care</h2>
      <p>
        Casual Fit is not a doctor, a dietitian, or a physiotherapist. Calorie targets, macros, and
        training loads are estimates based on what you enter. They are not a prescription.
      </p>
      <p>
        Stop an exercise that causes pain rather than ordinary effort. Questions about injury,
        illness, pregnancy, or an eating disorder belong with a qualified professional. The app will
        not diagnose you.
      </p>
      <p>
        Allergy filters are there to avoid a meal we cannot confirm is safe. They are not a
        guarantee. You still check the food in front of you.
      </p>

      <h2>Your account</h2>
      <p>
        You need an account to use the app. You agree that the email is yours, that the password is
        yours to keep, and that the body details you enter are for your own plan. Tell us if you
        think someone else is using the account.
      </p>
      <p>
        You can edit the profile. You can ask us to delete the account. See the{" "}
        <Link href="/privacy">privacy policy</Link> for what we store and how deletion works.
      </p>

      <h2>Your logs</h2>
      <p>
        Workouts, food logs, weight, and any progress photos you add stay yours. You give us
        permission to store them so the app can show them back to you, including a copy kept on the
        phone for a session with poor signal. We do not publish them, and we do not show them to
        other users.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Break into the service, another person’s account, or the database.</li>
        <li>Scrape, resell, or misrepresent the programmes or the exercise library.</li>
        <li>Upload anything unlawful, or anything that is not yours to upload.</li>
        <li>Use the app to give someone else medical advice.</li>
      </ul>

      <h2>Programmes</h2>
      <p>
        Programmes are templates. A starting plan is chosen from your goal, experience, days, and
        location. Gender does not decide which programmes you can open. You can change the week. You
        are responsible for choosing a load you can perform safely.
      </p>

      <h2>The website</h2>
      <p>
        This website explains the product. It is not the app. Pages can change as the product
        changes. The name Casual Fit, the logo, and the written programmes belong to Casual Fit.
      </p>

      <h2>Payments</h2>
      <p>
        The first version does not charge you inside this website. If a subscription is offered
        later, it will be sold through Apple’s and Google’s in-app purchase, on their terms. We will
        say the price before you pay.
      </p>

      <h2>Availability</h2>
      <p>
        We can suspend the service for maintenance, misuse, or a problem we cannot fix immediately.
        A downloaded workout is meant to keep working on the phone when the network does not. We do
        not promise that every session will sync, or that the service will be available every
        minute.
      </p>

      <h2>Liability</h2>
      <p>
        Training and changing how you eat involve risk. To the extent the law allows, Casual Fit is
        not liable for injury, for a decision you make from an estimate, or for lost data beyond
        what we are required to cover. Nothing in these terms limits liability that the law says
        cannot be limited.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. The date at the top will change. If you keep using the app after
        an update, you are agreeing to the new terms. If you do not agree, stop using the app and
        ask us to delete the account.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: {site.email}. Support requests can also go through the{" "}
        <Link href="/support">support page</Link>.
      </p>
    </Legal>
  );
}
