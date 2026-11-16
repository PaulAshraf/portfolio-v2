import Link from 'next/link'

import Head from '@/components/Head'
import { EntryList, Section } from '@/components/Log'
import { TextLinks } from '@/components/TextLinks'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles, TECH_SECTIONS } from '@/lib/getAllArticles'
import { goal } from '@/lib/journey'
import { links } from '@/lib/links'
import { resume } from '@/lib/resume'

export default function Home({ articles }) {
  return (
    <>
      <Head title="Home" />
      <Section label="About">
        <h1 className="title">
          AI-native engineer, on the road to AI research.
        </h1>
        <p className="text">
          I&apos;m Paul, a software engineer who builds by driving AI agents
          every day. I&apos;m now working toward technical AI safety research,
          and this blog is where I write up what I learn, build, and break along
          the way.
        </p>
        <TextLinks include={['github', 'x', 'linkedin']} />
      </Section>

      <Section label="Log" stack>
        <EntryList articles={articles} />
      </Section>

      <Section label="Goal">
        <p className="goal">{goal.text}</p>
        <p className="more">
          <Link href="/journey">→ journey</Link>
        </p>
      </Section>

      <Section label="Work">
        <ul className="work">
          {resume.map((role) => (
            <li key={`${role.company}-${role.title}`}>
              <span className="work-role">
                {role.company} — {role.title}
              </span>
              <span className="work-years">
                {role.start} – {role.end}
              </span>
            </li>
          ))}
        </ul>
        <p className="more">
          <a href="/paul_ashraf_cv.pdf">→ cv.pdf</a>
        </p>
      </Section>

      <Section label="Contact">
        <p className="text">
          If you work in AI safety and have feedback on something here, or want
          to collaborate, email me at{' '}
          <a className="link" href={`mailto:${links.mail}`}>
            {links.mail}
          </a>
          .
        </p>
      </Section>
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
