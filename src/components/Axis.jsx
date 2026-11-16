import { checkpointTicks, useCountdown } from '@/hooks/useCountdown'

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

function shortDate(date) {
  let [year, month] = date.split('-')
  return `${MONTHS[Number(month) - 1]} ${year.slice(2)}`
}

// Thin progress line fixed to the top of every page (axis design only).
export function AxisBar() {
  let { percent } = useCountdown()

  return (
    <div className="axis-bar" aria-hidden="true">
      <div className="ab-fill" style={{ width: `${percent ?? 0}%` }} />
      {checkpointTicks.map((tick) => (
        <span
          key={tick.date}
          className="ab-tick"
          style={{ left: `${tick.percent}%` }}
        />
      ))}
    </div>
  )
}

// Larger labelled version of the axis for /journey (axis design only).
export function JourneyAxis() {
  let { percent } = useCountdown()

  return (
    <div className="journey-axis" aria-hidden="true">
      <div className="ja-track">
        <div className="ja-fill" style={{ width: `${percent ?? 0}%` }} />
        {checkpointTicks.map((tick) => (
          <span
            key={tick.date}
            className="ja-tick"
            style={{ left: `${tick.percent}%` }}
          >
            <span className="ja-label">{shortDate(tick.date)}</span>
          </span>
        ))}
        {percent !== null && (
          <span className="ja-now" style={{ left: `${percent}%` }}>
            <span className="ja-label">NOW</span>
          </span>
        )}
      </div>
    </div>
  )
}
