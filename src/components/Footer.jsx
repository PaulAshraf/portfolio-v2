import { textLinks } from '@/lib/links'

export function Footer() {
  return (
    <footer className="ftr">
      <ul className="ftr-links">
        {textLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <p>© {new Date().getFullYear()} Paul Ashraf</p>
    </footer>
  )
}
