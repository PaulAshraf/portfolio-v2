import Link from 'next/link'

// Page building blocks, styled in src/styles/site.css.

// A section with an optional small label above its content.
export function Section({ label, className, children }) {
  return (
    <section className={['sec', className].filter(Boolean).join(' ')}>
      {label && <h2 className="sec-label">{label}</h2>}
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
  return `No. ${String(no).padStart(3, '0')}`
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
