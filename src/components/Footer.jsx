import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-indigo-500 dark:hover:text-indigo-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-slate-100 pt-10 pb-16 dark:border-slate-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-slate-800 dark:text-slate-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                {/* <NavLink href="/projects">Projects</NavLink> */}
                {/* <NavLink href="/uses">Uses</NavLink> */}
              </div>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                {new Date().getFullYear()} &copy; Paul Ashraf
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
