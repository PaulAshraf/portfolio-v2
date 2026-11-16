import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import Article from '@/sections/Article'

import Head from '@/components/Head'

export default function Films({ articles }) {
  return (
    <>
      <Head title="Films" />
      <SimpleLayout
        title="Films"
        intro="Movie reviews I've written over the years. The rest of the site is about tech, but these stay here."
      >
        <div className="md:border-l md:border-slate-100 md:pl-6 md:dark:border-slate-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} cta="Read review" />
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
      articles: (await getAllArticles({ sections: ['film'] })).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}
