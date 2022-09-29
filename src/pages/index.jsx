import { Container } from '@/components/Container'
import Head from '@/components/Head'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  SocialLink,
} from '@/components/SocialIcons'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { links } from '@/lib/links'

import Article from '@/sections/Article'
import Newsletter from '@/sections/Newsletter'
import Resume from '@/sections/Resume'
import Photos from '@/sections/Photos'

export default function Home({ articles }) {
  return (
    <>
      <Head title="Home" />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            Software Engineer by day, and a Film Critic by night.
          </h1>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-400">
            I’m Paul, a software engineer at Zammit and an aspiring film critic
            based in Cairo. Join me on my journey leading Zammit to becoming the
            major e-commerce platform in the Middle East, while watching pretty
            good movies too along the ride.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={links.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={links.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={links.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} mini />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 1)
        .map(({ component, ...meta }) => meta),
    },
  }
}
