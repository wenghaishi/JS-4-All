import Link from "next/link";
import IndexMarquee from "./components/indexPage/IndexMarquee";

const learningTracks = [
  {
    title: "Practice with intent",
    description:
      "Work through interview-style JavaScript questions with clear difficulty labels and fast entry points.",
    href: "/code",
    cta: "Open challenges",
  },
  {
    title: "Retain core theory",
    description:
      "Use flashcards to tighten up concepts, syntax recall, and mental models before you code.",
    href: "/flashcards",
    cta: "Review flashcards",
  },
  {
    title: "Build fundamentals",
    description:
      "Follow lesson content that turns scattered docs knowledge into a structured learning path.",
    href: "/lessons",
    cta: "Start lessons",
  },
];

const proofPoints = [
  "Focused practice paths instead of a generic tutorial wall",
  "A cleaner flow across lessons, drills, and theory review",
  "Built for repeat sessions on desktop and mobile",
];

const journeySteps = [
  {
    label: "01",
    title: "Pick a lane",
    copy: "Jump into lessons, flashcards, or challenge sets based on what you need today.",
  },
  {
    label: "02",
    title: "Train actively",
    copy: "Read less passively and spend more time solving, testing, and repeating key concepts.",
  },
  {
    label: "03",
    title: "Build momentum",
    copy: "Use short, repeatable sessions that make JavaScript practice easier to sustain.",
  },
];

export default function Home() {
  return (
    <main className="landing-shell overflow-x-hidden text-stone-950">
      <section className="relative isolate">
        <div className="landing-grid absolute inset-0 -z-20 opacity-60" />
        <div className="landing-glow landing-glow-left absolute -top-24 left-0 -z-10 h-80 w-80 rounded-full blur-3xl" />
        <div className="landing-glow landing-glow-right absolute right-0 top-24 -z-10 h-96 w-96 rounded-full blur-3xl" />

        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-stone-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                JavaScript practice, lessons, and theory in one place
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.05em] text-stone-950 sm:text-6xl lg:text-7xl">
                Learn JavaScript with a workflow that feels current.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
                JS-4-all brings together structured lessons, interview-style
                challenges, and quick theory review so learners can move from
                reading to real practice without losing momentum.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/code"
                  className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-stone-800"
                >
                  Start solving
                </Link>
                <Link
                  href="/lessons"
                  className="inline-flex items-center justify-center rounded-full border border-stone-950/10 bg-white/80 px-6 py-3 text-sm font-semibold text-stone-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-stone-950/20"
                >
                  Browse lessons
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                  <p className="text-3xl font-black tracking-tight text-stone-950">
                    3
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    learning modes that support different stages of practice
                  </p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                  <p className="text-3xl font-black tracking-tight text-stone-950">
                    1
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    consistent home base instead of scattered docs and notes
                  </p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                  <p className="text-3xl font-black tracking-tight text-stone-950">
                    100%
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    focused on building confidence through repetition
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="landing-card overflow-hidden rounded-[2rem] border border-stone-900/10 bg-white/85 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">
                      Today&apos;s flow
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-stone-950">
                      Learn, drill, then review
                    </h2>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-stone-950 p-5 text-stone-50">
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                      Suggested session
                    </p>
                    <p className="mt-3 text-lg font-semibold">
                      15 minutes of theory, 20 minutes of coding, 10 minutes of recall.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-stone-900/10 bg-stone-50 p-5">
                      <p className="text-sm font-semibold text-stone-900">
                        Code practice
                      </p>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        Warm up with challenge sets that make progress visible.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-stone-900/10 bg-stone-50 p-5">
                      <p className="text-sm font-semibold text-stone-900">
                        Flash review
                      </p>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        Keep key syntax and concepts fresh between deeper sessions.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-stone-900/15 bg-white p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      Why it works
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
                      {proofPoints.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-rose-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-stone-900/10 bg-white/80 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-6">
          <IndexMarquee />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Core paths
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-5xl">
              A landing page that explains the product in one pass.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Each area now has a clearer reason to exist, a direct call to
            action, and enough context for a new visitor to understand the
            value quickly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {learningTracks.map((track) => (
            <Link
              key={track.title}
              href={track.href}
              className="group rounded-[2rem] border border-stone-900/10 bg-white/90 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]"
            >
              <div className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Explore
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-stone-950">
                {track.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {track.description}
              </p>
              <div className="mt-8 inline-flex items-center text-sm font-semibold text-stone-950">
                {track.cta}
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <div className="grid gap-8 rounded-[2.5rem] border border-stone-900/10 bg-[linear-gradient(135deg,#111827_0%,#1f2937_40%,#312e81_100%)] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Learning rhythm
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              A better sequence than just reading tutorials.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              The homepage now frames JS-4-all around a repeatable practice
              cycle. That makes the app feel more like a product and less like
              a collection of disconnected pages.
            </p>
          </div>

          <div className="grid gap-4">
            {journeySteps.map((step) => (
              <div
                key={step.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                    {step.label}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-28 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-stone-900/10 bg-white/90 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Ready to start
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
              Move from browsing to practice in one click.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
              The homepage now prioritizes clarity, stronger hierarchy, and
              direct navigation to the parts of the app that matter.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
            <Link
              href="/flashcards"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-400"
            >
              Open flashcards
            </Link>
            <Link
              href="/auth/signUp"
              className="inline-flex items-center justify-center rounded-full border border-stone-900/10 bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200"
            >
              Create account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
