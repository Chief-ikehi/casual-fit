import Image from "next/image";
import { Footer, Header, StoreLinks } from "@/components/chrome";
import { jobs, monday, plates, plans, rules, ticker, week } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className="hero">
          <div className="wrap hero-grid">
            <Image className="mark" src="/logo-mark.png" alt="" width={586} height={361} priority />
            <div className="hero-copy">
              <p className="kicker">A personal trainer in the phone</p>
              <h1>
                What
                <br />
                should I
                <br />
                <span className="lime">work out?</span>
              </h1>
              <p className="lede">
                Casual Fit answers that before you talk yourself out of it. Then it answers the
                next three: how to do it, what to eat, and whether any of it is working.
              </p>
              <p className="tagline">
                <span>Train</span>
                <span aria-hidden="true">·</span>
                <span>Eat</span>
                <span aria-hidden="true">·</span>
                <span>Track</span>
                <span aria-hidden="true">·</span>
                <span>Grow</span>
              </p>
            </div>
            <ol className="hero-rest">
              <li>
                <span>02</span>
                How should I do it?
              </li>
              <li>
                <span>03</span>
                What should I eat?
              </li>
              <li>
                <span>04</span>
                Am I making progress?
              </li>
            </ol>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <p>
              {ticker.map((item) => (
                <span key={item}>
                  {item}
                  <span className="dot">·</span>
                </span>
              ))}
            </p>
            <p>
              {ticker.map((item) => (
                <span key={`${item}-2`}>
                  {item}
                  <span className="dot">·</span>
                </span>
              ))}
            </p>
          </div>
        </div>

        <section id="monday">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">A sample Monday</p>
              <h2>The session is already written.</h2>
            </div>
            <ol className="week">
              {week.map((item) => (
                <li key={item.day} className={item.state}>
                  <span className="day">{item.day}</span>
                  <span className="state">{item.state === "rest" ? "Rest" : "Train"}</span>
                </li>
              ))}
            </ol>
            <div className="monday-layout">
              <ol className="ledger">
                {monday.map((move, index) => (
                  <li key={move.name}>
                    <span className="n">{String(index + 1).padStart(2, "0")}</span>
                    <span>{move.name}</span>
                    <span className="dose">{move.dose}</span>
                  </li>
                ))}
              </ol>
              <div className="aside">
                <p>
                  Beginner full body, session A. Yours is picked from your goal, your experience,
                  the days you train, and whether that happens in a gym or at home.
                </p>
                <p>
                  Each exercise can show a demo, the muscles it uses, and the mistake people make.
                  The workout is saved on the phone, so a bad gym signal does not end the session.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="day" aria-labelledby="day-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">The day</p>
              <h2 id="day-title">Four answers, then you train.</h2>
            </div>
            <ol className="jobs">
              {jobs.map((job) => (
                <li key={job.n}>
                  <span className="n">{job.n}</span>
                  <h3>{job.title}</h3>
                  <p>{job.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="plate">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">The plate</p>
              <h2>Eat what you already eat.</h2>
            </div>
            <div className="menu">
              {plates.map((plate) => (
                <article key={plate.place}>
                  <h3>{plate.place}</h3>
                  <p className="foods">{plate.foods}</p>
                  <p className="note">{plate.note}</p>
                </article>
              ))}
            </div>
            <p className="hard-rule">
              If we cannot be sure a meal is safe for your allergy, we do not recommend it.
            </p>
          </div>
        </section>

        <section id="plans">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">The plans</p>
              <h2>Pick a week. Change it.</h2>
            </div>
            <ul className="fixtures">
              {plans.map((plan) => (
                <li key={plan.name}>
                  <span className="where">{plan.where}</span>
                  <h3>{plan.name}</h3>
                  <p>{plan.note}</p>
                </li>
              ))}
            </ul>
            <p className="equipment">
              Home sessions use what you own: dumbbells, bands, a pull-up bar, a bench, a kettlebell,
              or nothing but the floor.
            </p>
          </div>
        </section>

        <section id="rules" aria-labelledby="rules-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">House rules</p>
              <h2 id="rules-title">What the app will not pretend.</h2>
            </div>
            <ol className="rules">
              {rules.map((rule, index) => (
                <li key={rule}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="download" id="download">
          <div className="wrap">
            <div>
              <p className="kicker">iPhone and Android</p>
              <h2>Take it to the gym.</h2>
            </div>
            <div>
              <p>
                The apps are not in the stores yet. These buttons open Apple and Google until the
                Casual Fit listings are up.
              </p>
              <StoreLinks />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
