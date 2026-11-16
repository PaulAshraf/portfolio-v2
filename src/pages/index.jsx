import Image from 'next/image'

import Head from '@/components/Head'
import { EntryList, Section } from '@/components/Log'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles, TECH_SECTIONS } from '@/lib/getAllArticles'
import { links, textLinks } from '@/lib/links'
import { work } from '@/lib/resume'

const socials = textLinks.filter((link) =>
  ['github', 'x', 'linkedin'].includes(link.label)
)

export default function Home({ articles }) {
  return (
    <>
      <Head title="Home" />
      <Section>
        <h1 className="title">
          AI-native engineer, on the road to AI safety research.
        </h1>
        <p className="text">
          I&apos;m Paul, a software engineer. I believe AI safety research is
          one of the most important problems humanity can work on. Whether we
          solve it could be the difference between abundance, even utopia, and
          catastrophic collapse.
        </p>
        <p className="text">
          I want to bring my engineering experience to this field and do real,
          high-quality research. This blog is where I share what I learn, and I
          hope it helps others who think the same way find their way into the
          field too.
        </p>
        <ul className="textlinks">
          {socials.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Log">
        <EntryList articles={articles} />
      </Section>

      <Section label="Work">
        <ol className="work">
          {work.map((company) => (
            <li key={company.company} className="work-company">
              <Image
                src={company.logo}
                alt={`${company.company} logo`}
                className="work-logo"
                sizes="48px"
              />
              <div>
                <h3 className="work-name">{company.company}</h3>
                <ul className="work-roles">
                  {company.roles.map((role) => (
                    <li key={role.title} className="work-role">
                      <span className="work-title">{role.title}</span>
                      <span className="work-years">
                        {role.start} – {role.end}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <p className="more">
          <a href="/paul_ashraf_cv.pdf">→ Download CV</a>
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
