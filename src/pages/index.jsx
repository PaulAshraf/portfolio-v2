import { Container } from '@/components/Container'
import Head from '@/components/Head'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  SocialLink,
} from '@/components/SocialIcons'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles, TECH_SECTIONS } from '@/lib/getAllArticles'
import { links } from '@/lib/links'

import Article from '@/sections/Article'
import Newsletter from '@/sections/Newsletter'
import Resume from '@/sections/Resume'
import JourneyCard from '@/sections/JourneyCard'

export default function Home({ articles }) {
  return (
    <>
      <Head title="Home" />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            AI-native engineer, on the road to AI research.
          </h1>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-400">
            I&apos;m Paul, a software engineer who builds by driving AI agents
            every day. I&apos;m now working toward technical AI safety research,
            and this blog is where I write up what I learn, build, and break
            along the way.
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
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} mini />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <JourneyCard />
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
      articles: (await getAllArticles({ sections: TECH_SECTIONS }))
        .slice(0, 3)
        .map(({ component, ...meta }) => meta),
    },
  }
}
