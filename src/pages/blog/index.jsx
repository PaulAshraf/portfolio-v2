import Link from 'next/link'

import Head from '@/components/Head'
import { EntryList, Section } from '@/components/Log'
import { getAllArticles, TECH_SECTIONS } from '@/lib/getAllArticles'

function groupByYear(articles) {
  let years = new Map()
  for (let article of articles) {
    let year = article.date.slice(0, 4)
    years.set(year, [...(years.get(year) ?? []), article])
  }
  return [...years.entries()]
}

export default function Blog({ articles }) {
  return (
    <>
      <Head title="Blog" />
      <Section label="Index">
        <h1 className="title">Log</h1>
        <p className="text">
          Engineering write-ups, experiments, and progress reports from my move
          into AI research. The plan lives on{' '}
          <Link className="link" href="/journey">
            journey
          </Link>
          ; movie reviews live under{' '}
          <Link className="link" href="/films">
            films
          </Link>
          .
        </p>
      </Section>

      {groupByYear(articles).map(([year, posts]) => (
        <Section key={year} label={year} stack className="sec-year">
          <EntryList articles={posts} />
        </Section>
      ))}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles({ sections: TECH_SECTIONS })).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}
