import Head from 'next/head'
import Link from 'next/link'
import Giscus from '@giscus/react'

import { useIsDark } from '@/hooks/useHtmlAttribute'

function blogLink(path) {
  return `https://www.paulashraf.com/blog/${path}`
}

export function ArticleLayout({ isRssFeed = false, ...props }) {
  // The RSS feed renders posts outside Next's router, so skip the page chrome.
  if (isRssFeed) {
    return props.children
  }

  return <ArticlePage {...props} />
}

function ArticlePage({ children, meta }) {
  let isDark = useIsDark()
  let isFilm = meta.section === 'film'

  return (
    <>
      <Head>
        <link key="canonical" rel="canonical" href={blogLink(meta.url)} />

        {/* SEO tags */}
        <title key="title">{meta.title}</title>
        <meta key="description" name="description" content={meta.description} />
        <meta key="keywords" name="keywords" content={meta.seoKeywords} />

        {/* OG Tags */}
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:title" property="og:title" content={meta.title} />
        <meta
          key="og:description"
          property="og:description"
          content={meta.description}
        />
        <meta key="og:image" property="og:image" content={meta.logoUrl} />
        <meta key="og:image:alt" property="og:image:alt" content={meta.title} />
        <meta key="og:url" property="og:url" content={blogLink(meta.url)} />
        <meta
          key="og:site_name"
          property="og:site_name"
          content="Paul Ashraf Blog"
        />
        <meta property="article:section" content={meta.section} />
        {meta.seoKeywords.split(',').map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <meta property="article:author" content={meta.author} />
        <meta property="article:published_time" content={meta.date} />

        <meta key="twitter:title" name="twitter:title" content={meta.title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={meta.description}
        />
        <meta key="twitter:image" name="twitter:image" content={meta.logoUrl} />
        <meta
          key="twitter:site"
          name="twitter:site"
          content={blogLink(meta.url)}
        />
      </Head>
      <article className="article">
        <section className="sec article-head">
          <div className="sec-label">
            <time className="ah-date" dateTime={meta.date}>
              {meta.date}
            </time>
            <span className="ah-section">{meta.section}</span>
          </div>
          <div className="sec-body">
            <Link className="back" href={isFilm ? '/films' : '/blog'}>
              ← {isFilm ? 'films' : 'log'}
            </Link>
            <h1 className="title">{meta.title}</h1>
          </div>
        </section>
        <div className="prose">{children}</div>
        <section className="sec discussion">
          <h2 className="sec-label">Discussion</h2>
          <div className="sec-body">
            <Giscus
              id="comments"
              repo="PaulAshraf/portfolio-v2"
              repoId="R_kgDOGieZpg"
              category="Announcements"
              categoryId="DIC_kwDOGieZps4CSUPI"
              mapping="title"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="bottom"
              theme={isDark ? 'noborder_dark' : 'noborder_light'}
              lang="en"
              loading="lazy"
              strict
            />
          </div>
        </section>
      </article>
    </>
  )
}
