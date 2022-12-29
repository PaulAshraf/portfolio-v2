import Head from 'next/head'
import { useRouter } from 'next/router'
import Giscus from '@giscus/react'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

function blogLink(path) {
  return `https://www.paulashraf.com/blog/${path}`
}

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
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
        <meta property="article:published_time" content={new Date(meta.date)} />

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
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to blog"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 transition dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0 dark:ring-white/10 dark:hover:border-slate-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-slate-500 transition group-hover:stroke-slate-700 dark:stroke-slate-500 dark:group-hover:stroke-slate-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-slate-400 dark:text-slate-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-slate-200 dark:bg-slate-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="my-8">{children}</Prose>
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
                theme="preferred_color_scheme"
                lang="en"
                loading="lazy"
                strict
              />
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
