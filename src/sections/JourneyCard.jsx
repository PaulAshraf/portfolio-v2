import Link from 'next/link'

import { formatDate } from '@/lib/formatDate'
import { checkpoints, goal } from '@/lib/journey'

function JourneyCard() {
  let next =
    checkpoints.find((checkpoint) => checkpoint.status === 'active') ??
    checkpoints.find((checkpoint) => checkpoint.status === 'upcoming')

  return (
    <div className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
      <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
        Engineer → AI Researcher
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Goal for {goal.by.toLowerCase()}: a paid technical AI safety role.
      </p>
      {next && (
        <div className="mt-4 text-sm">
          <p className="font-medium text-slate-800 dark:text-slate-100">
            Next checkpoint · {formatDate(next.date)}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-600 dark:text-slate-400">
            {next.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <Link
        href="/journey"
        className="mt-5 inline-flex text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
      >
        Follow the journey →
      </Link>
    </div>
  )
}

export default JourneyCard
