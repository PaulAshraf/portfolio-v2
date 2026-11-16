import { Container } from '@/components/Container'
import Head from '@/components/Head'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { checkpoints, goal, learning, rules } from '@/lib/journey'
import Article from '@/sections/Article'

import clsx from 'clsx'

const statusStyles = {
  active:
    'bg-indigo-50 text-indigo-600 ring-indigo-500/20 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20',
  done: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20',
  missed:
    'bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20',
  upcoming:
    'bg-slate-50 text-slate-500 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700',
}

const statusLabels = {
  active: 'In progress',
  done: 'Done',
  missed: 'Re-planned',
  upcoming: 'Upcoming',
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
      {children}
    </h2>
  )
}

export default function Journey({ articles }) {
  return (
    <>
      <Head
        title="Journey"
        description="Paul Ashraf's public log of moving from software engineer to technical AI safety researcher."
      />
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
            Engineer → AI Researcher
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            Becoming an AI safety researcher, in public.
          </h1>
          <div className="mt-6 space-y-4 text-base text-slate-600 dark:text-slate-400">
            <p>
              I think transformative AI is likely within a few years, that
              alignment isn&apos;t solved by default, and that the outcome is
              still open. The field is short of people who can do the work.
            </p>
            <p>
              My edge is years of engineering and daily fluency in driving AI
              agents. Empirical safety work is engineering-heavy, so that skill
              is the multiplier, not the thing I&apos;m leaving behind. What
              I&apos;m missing is the research half: ML depth, experimental
              rigor, research taste, and the safety literature. This page tracks
              closing that gap.
            </p>
          </div>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-16 sm:mt-20 lg:grid-cols-3">
          <div className="space-y-16 lg:col-span-2">
            <section>
              <SectionHeading>Posts</SectionHeading>
              <div className="mt-8">
                {articles.length > 0 ? (
                  <div className="flex flex-col space-y-16">
                    {articles.map((article) => (
                      <Article key={article.slug} article={article} mini />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    The first post is on its way. Replications, experiment
                    write-ups, and progress reviews will show up here.
                  </div>
                )}
              </div>
            </section>

            <section>
              <SectionHeading>What I&apos;m learning</SectionHeading>
              <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {learning.map((item) => (
                  <div key={item.title}>
                    <dt className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
                      {item.title}
                    </dt>
                    <dd className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <aside className="space-y-10">
            <div className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                The goal · {goal.by}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {goal.text}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Checkpoints
              </h2>
              <ol className="mt-6 space-y-6">
                {checkpoints.map((checkpoint) => (
                  <li key={checkpoint.date}>
                    <div className="flex items-center justify-between gap-2">
                      <time
                        dateTime={checkpoint.date}
                        className="text-sm font-medium text-slate-800 dark:text-slate-100"
                      >
                        {formatDate(checkpoint.date)}
                      </time>
                      <span
                        className={clsx(
                          'rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset',
                          statusStyles[checkpoint.status]
                        )}
                      >
                        {statusLabels[checkpoint.status]}
                      </span>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600 dark:text-slate-400">
                      {checkpoint.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Ground rules
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-slate-400">
                {rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles({ sections: ['research'] })).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}
