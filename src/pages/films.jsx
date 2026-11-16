import Head from '@/components/Head'
import { EntryList, Section } from '@/components/Log'
import { getAllArticles } from '@/lib/getAllArticles'

export default function Films({ articles }) {
  return (
    <>
      <Head title="Films" />
      <Section>
        <h1 className="title">Films</h1>
        <p className="text">
          I&apos;m also a movie nerd, and every now and then I write a review
          here.
        </p>
      </Section>
      <Section label="Reviews">
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
