import Image from 'next/image'
import Link from 'next/link'

import Head from '@/components/Head'
import { Section } from '@/components/Log'
import { TextLinks } from '@/components/TextLinks'
import portraitImage from '@/images/avatar.jpeg'

export default function About() {
  return (
    <>
      <Head title="About" />
      <section className="sec about">
        <div className="sec-label">
          <span className="about-label">About</span>
          <Image
            src={portraitImage}
            alt="Portrait of Paul Ashraf"
            sizes="280px"
            className="portrait"
            priority
          />
        </div>
        <div className="sec-body">
          <h1 className="title">
            I’m Paul Ashraf. An AI-native engineer becoming an AI researcher.
          </h1>
          <p className="text">
            I&apos;ve spent my career shipping production software, and these
            days most of that work runs through AI agents. Using these systems
            every day is a big part of why I want to understand how they work,
            and how to make them safe.
          </p>
          <p className="text">
            So I&apos;m moving into technical AI safety research. I&apos;m
            learning ML at implementation depth, replicating published results,
            and running my own experiments, all in public. You can follow along
            on the{' '}
            <Link className="link" href="/journey">
              journey
            </Link>{' '}
            page.
          </p>
          <p className="text">
            I still love movies, and the few reviews I&apos;ve written live
            under{' '}
            <Link className="link" href="/films">
              films
            </Link>
            .
          </p>
        </div>
      </section>
      <Section label="Elsewhere">
        <TextLinks />
      </Section>
    </>
  )
}
