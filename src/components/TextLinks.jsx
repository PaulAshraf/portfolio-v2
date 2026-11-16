import { textLinks } from '@/lib/links'

export function TextLinks({ include }) {
  let items = include
    ? textLinks.filter((link) => include.includes(link.label))
    : textLinks

  return (
    <ul className="textlinks">
      {items.map((link) => (
        <li key={link.label}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  )
}
