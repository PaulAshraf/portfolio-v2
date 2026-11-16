import Link from 'next/link'

// Shared building blocks. Every design styles these same elements; see
// src/styles/designs.css.

// A labelled section. `stack` puts the label on its own line so the children
// (usually Rows) can use the full width, including their own meta column.
export function Section({ label, stack = false, className, children }) {
  return (
    <section
      className={['sec', className].filter(Boolean).join(' ')}
      data-stack={stack ? '' : undefined}
    >
      <h2 className="sec-label">{label}</h2>
      <div className="sec-body">{children}</div>
    </section>
  )
}

export function Row({
  as: Component = 'div',
  meta,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={['row', className].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="row-meta">{meta}</div>
      <div className="row-body">{children}</div>
    </Component>
  )
}

export function entryNumber(no) {
  return `№ ${String(no).padStart(3, '0')}`
}

export function Entry({ article, label }) {
  return (
    <Row
      as="article"
      className="entry"
      data-section={article.section}
      meta={
        <>
          <span className="entry-no">{label ?? entryNumber(article.no)}</span>
          <time className="entry-date" dateTime={article.date}>
            {article.date}
          </time>
        </>
      }
    >
      <h3 className="entry-title">
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="entry-desc">{article.description}</p>
      <span className="entry-tag">{article.section}</span>
    </Row>
  )
}

export function EntryList({ articles, label, empty = 'No entries yet.' }) {
  if (articles.length === 0) {
    return <p className="empty">{empty}</p>
  }

  return articles.map((article) => (
    <Entry key={article.slug} article={article} label={label} />
  ))
}
