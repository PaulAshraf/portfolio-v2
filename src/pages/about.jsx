import Image from 'next/image'
import Link from 'next/link'
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
              I’m Paul Ashraf. An AI-native engineer becoming an AI researcher.
            </h1>
            <div className="mt-6 space-y-7 text-base text-slate-600 dark:text-slate-400">
              <p>
                I&apos;ve spent my career shipping production software, and
                these days most of that work runs through AI agents. Using these
                systems every day is a big part of why I want to understand how
                they work, and how to make them safe.
              </p>
              <p>
                So I&apos;m moving into technical AI safety research. I&apos;m
                learning ML at implementation depth, replicating published
                results, and running my own experiments, all in public. You can
                follow along on the{' '}
                <Link
                  href="/journey"
                  className="font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                >
                  Journey
                </Link>{' '}
                page.
              </p>
              <p>
                I still love movies, and the few reviews I&apos;ve written live
                under{' '}
                <Link
                  href="/films"
                  className="font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                >
                  Films
                </Link>
                .
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
