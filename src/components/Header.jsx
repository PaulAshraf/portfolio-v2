import Link from 'next/link'
import { useRouter } from 'next/router'

const NAV = [
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

  return (
    <button
      type="button"
      className="toggle"
      aria-label="Toggle dark mode"
      onClick={toggleMode}
    />
  )
}

export function Header() {
  let { pathname } = useRouter()

  return (
    <header className="hdr">
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
    </header>
  )
}
