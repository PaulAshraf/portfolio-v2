import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles, TECH_SECTIONS } from '@/lib/getAllArticles'
import Article from '@/sections/Article'

import Head from '@/components/Head'

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head title="Blog" />
      <SimpleLayout
        title="Notes from building with AI, and learning how it works."
        intro={
          <>
            Engineering write-ups, experiments, and progress reports from my
            move into AI research. The research journey has its own page at{' '}
            <Link
              href="/journey"
              className="font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
            >
              Journey
            </Link>
            , and movie reviews live under{' '}
            <Link
              href="/films"
              className="font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
            >
              Films
            </Link>
            .
          </>
        }
      >
        <div className="md:border-l md:border-slate-100 md:pl-6 md:dark:border-slate-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
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
