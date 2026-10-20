import type { Metadata } from "next";
import { Legal } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What Casual Fit collects, what it refuses to do with it, and how to ask for a copy or deletion.",
};

export default function PrivacyPage() {
  return (
    <Legal
      kicker={`Privacy · ${site.updated}`}
      title="Privacy policy"
      lede="This is the policy for Casual Fit, the training app, and for this website. It describes the product we are building. Have it reviewed before the app is offered to the public."
    >
      <h2>Who we are</h2>
      <p>
        Casual Fit is a personal training app for iPhone and Android, plus this website. The app
        tells you what to train, how to do it, what to eat, and whether you are making progress.
        Contact {site.email} for privacy requests.
      </p>

      <h2>The short version</h2>
      <p>
        You give us an email, a password, and the answers that build your plan: body details, goals,
        equipment, training days, and food limits. We use that to run your account. We do not sell
        it. Another user cannot see your logs or your photos. This website does not set tracking
        cookies.
      </p>

      <h2>Account</h2>
      <p>When you create an account we store:</p>
      <ul>
        <li>Your email address.</li>
        <li>A hash of your password. We do not store the password itself.</li>
        <li>A login token on your phone, and a hashed refresh token on our side, so you can stay signed in.</li>
        <li>The date the account was created, and whether the account is a normal user or an owner.</li>
      </ul>

      <h2>The profile that builds the plan</h2>
      <p>During setup, and whenever you edit it, we store what you choose to tell us:</p>
      <ul>
        <li>Name, age, and gender. Gender can be “prefer not to say”. It does not lock a programme.</li>
        <li>Height, weight, and goal weight.</li>
        <li>Goals, experience, and whether you train at a gym, at home, or both.</li>
        <li>Home equipment, training days, and how active the rest of your day is.</li>
        <li>Preferred cuisines and food restrictions, including allergies.</li>
        <li>The calorie and protein targets we estimate from those answers.</li>
      </ul>

      <h2>Training and food records</h2>
      <p>
        As those parts of the app ship, we store the plan assigned to you, the exercises in it, the
        sets, reps, and weights you log, workout history, body weight, and measurements. A workout
        can be saved on the phone first and sent to us when the phone is online again.
      </p>
      <p>
        Progress photos, when that feature exists, are private to your account. We do not build a
        social feed, and one user cannot open another user’s photos or logs.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell personal information.</li>
        <li>We do not use your data to advertise other companies’ products.</li>
        <li>We do not give medical advice or diagnose an injury.</li>
        <li>We do not recommend a meal when we cannot be sure it is safe for an allergy you told us about.</li>
        <li>This website does not run advertising or analytics cookies.</li>
      </ul>

      <h2>Estimates</h2>
      <p>
        Calorie, macro, and training targets are estimates calculated from what you enter. They are
        not lab measurements and they are not a prescription. Nutrition numbers in the app are
        labelled estimated or verified.
      </p>

      <h2>Who else handles it</h2>
      <p>
        The app and its database are hosted for us so the service can run. Those providers process
        data on our instructions. They are not allowed to use it for their own advertising. The
        phone stores a copy of a downloaded workout so the session still works with a poor signal.
      </p>
      <p>
        If you buy a subscription later, Apple or Google will process that payment. We do not ask
        the app to collect your card number.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep account and training data while the account is open. Password-reset links expire.
        When you delete the account, we delete the profile and the records tied to it, except where
        we have to keep a small record to meet a legal duty or to resolve a dispute.
      </p>

      <h2>Your choices</h2>
      <p>You can ask us to:</p>
      <ul>
        <li>Send you a copy of the personal information we hold.</li>
        <li>Correct something that is wrong. You can also edit the profile in the app.</li>
        <li>Delete the account and the data attached to it.</li>
      </ul>
      <p>
        Email {site.email} from the address on the account. In-app deletion is part of the product
        before public launch. Until that control is in the app, email is the way to ask.
      </p>

      <h2>Children</h2>
      <p>
        Casual Fit is not for children under 16. We do not knowingly create accounts for them. If
        you believe a child has an account, email us and we will delete it.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes in a way that matters, we will update the date at the top and, where
        the law requires it, tell you in the app or by email.
      </p>
    </Legal>
  );
}
