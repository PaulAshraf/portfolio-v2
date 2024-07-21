import Image from 'next/future/image'
import { links } from '@/lib/links'

import { Container } from '@/components/Container'
import Head from '@/components/Head'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpeg'
import { SocialLink } from '../components/SocialLink'
import { AlternateMailIcon as MailIcon } from '@/components/icons'

export default function About() {
  return (
    <>
      <Head title="About" />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-slate-100 object-cover dark:bg-slate-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
              I’m Paul Ashraf. A Software Engineer by day, and a Film Critic by
              night.
            </h1>
            <div className="mt-6 space-y-7 text-base text-slate-600 dark:text-slate-400">
              <p>
                Im Paul, a software engineer and an aspiring film critic based
                in Cairo. Join me on my journey discussing interesting tech,
                while watching pretty good movies too along the ride.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={links.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href={links.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={links.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${links.mail}`}
                icon={MailIcon}
                className="mt-8 border-t border-slate-100 pt-8 dark:border-slate-700/40"
              >
                {links.mail}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
