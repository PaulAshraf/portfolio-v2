import Head from '@/components/Head'
import { EntryList, Section } from '@/components/Log'
import { getAllArticles } from '@/lib/getAllArticles'

export default function Films({ articles }) {
  return (
    <>
      <Head title="Films" />
      <Section label="Films">
        <h1 className="title">Films</h1>
        <p className="goal">
          A couple of reviews from before this became a tech blog.
        </p>
      </Section>
      <Section label="Reviews" stack>
        <EntryList articles={articles} label="Film" />
      </Section>
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
