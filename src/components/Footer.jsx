import { useCountdown } from '@/hooks/useCountdown'
import { textLinks } from '@/lib/links'

export function Footer() {
  let { daysLeft, percent } = useCountdown()
  let days = daysLeft ?? '···'
  let elapsed = percent === null ? '··' : Math.floor(percent)

  return (
    <footer className="ftr">
      <div className="ftr-slot">
        <span className="ftr-end">End</span>
      </div>
      <div className="ftr-main">
        <ul className="ftr-links">
          {textLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <p className="ftr-note">
          <span className="ftr-plain">T-{days}d to goal</span>
          <span className="ftr-axis">
            {elapsed}% elapsed · {days} days left
          </span>
          <span className="ftr-copy">© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}
