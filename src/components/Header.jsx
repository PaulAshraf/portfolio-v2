import Link from 'next/link'
import { useRouter } from 'next/router'

import { useCountdown } from '@/hooks/useCountdown'

const NAV = [
  { href: '/journey', label: 'journey' },
  { href: '/blog', label: 'blog' },
  { href: '/films', label: 'films' },
  { href: '/about', label: 'about' },
]

function isActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  // Each design shows one of these glyphs; the rest are hidden in CSS.
  return (
    <button
      type="button"
      className="toggle"
      aria-label="Toggle dark mode"
      onClick={toggleMode}
    >
      <span className="tg-margin" aria-hidden="true">
        ◐
      </span>
      <span className="tg-plain" aria-hidden="true" />
      <span className="tg-axis" aria-hidden="true" />
    </button>
  )
}

export function Header() {
  let { pathname } = useRouter()
  let { daysLeft } = useCountdown()
  let segment = pathname.split('/')[1]

  return (
    <header className="hdr">
      <div className="hdr-slot">
        <span
          className="slot-countdown"
          title="Days until the end-of-2027 goal"
        >
          T−{daysLeft ?? '···'}d
        </span>
        <span className="slot-path">
          <Link href="/">paulashraf.com</Link>
          {segment && (
            <>
              /<strong>{segment}</strong>
            </>
          )}
        </span>
      </div>
      <div className="hdr-main">
        <Link href="/" className="hdr-name">
          Paul Ashraf
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
