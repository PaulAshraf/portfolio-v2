import { useSyncExternalStore } from 'react'

import { checkpoints, deadline, start } from '@/lib/journey'

const DAY = 24 * 60 * 60 * 1000

function subscribe() {
  return () => {}
}

// Today's date as a stable string, so the snapshot only changes once a day.
function getToday() {
  return new Date().toISOString().slice(0, 10)
}

function getServerToday() {
  return null
}

function toTime(date) {
  return new Date(`${date}T00:00:00Z`).getTime()
}

function percentAt(date) {
  let total = toTime(deadline) - toTime(start)
  let elapsed = toTime(date) - toTime(start)
  return Math.min(100, Math.max(0, (elapsed / total) * 100))
}

// Checkpoint positions on the start -> deadline axis, in percent.
export const checkpointTicks = checkpoints.map((checkpoint) => ({
  date: checkpoint.date,
  percent: percentAt(checkpoint.date),
}))

// Days left and percent elapsed until the deadline. Both are null during
// server rendering, since the static export can't know today's date.
export function useCountdown() {
  let today = useSyncExternalStore(subscribe, getToday, getServerToday)

  if (!today) {
    return { daysLeft: null, percent: null }
  }

  return {
    daysLeft: Math.max(0, Math.ceil((toTime(deadline) - toTime(today)) / DAY)),
    percent: percentAt(today),
  }
}
