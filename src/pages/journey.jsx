import { JourneyAxis } from '@/components/Axis'
import Head from '@/components/Head'
import { EntryList, Row, Section } from '@/components/Log'
import { getAllArticles } from '@/lib/getAllArticles'
import { checkpoints, deadline, goal, learning, rules } from '@/lib/journey'

const statusLabels = {
  active: 'Active',
  done: 'Done',
  missed: 'Re-planned',
  upcoming: 'Upcoming',
}

export default function Journey({ articles }) {
  return (
    <>
      <Head
        title="Journey"
        description="Paul Ashraf's public log of moving from software engineer to technical AI safety researcher."
      />
      <Section label="Thesis">
        <p className="kicker">Engineer → AI Researcher</p>
        <h1 className="title">Becoming an AI safety researcher, in public.</h1>
        <p className="text">
          I think transformative AI is likely within a few years, that alignment
          isn&apos;t solved by default, and that the outcome is still open. The
          field is short of people who can do the work.
        </p>
        <p className="text">
          My edge is years of engineering and daily fluency in driving AI
          agents. Empirical safety work is engineering-heavy, so that skill is
          the multiplier, not the thing I&apos;m leaving behind. What I&apos;m
          missing is the research half: ML depth, experimental rigor, research
          taste, and the safety literature. This page tracks closing that gap.
        </p>
      </Section>

      <Section label={`By ${deadline}`} className="sec-goal">
        <p className="goal">{goal.text}</p>
      </Section>

      <Section label="Checkpoints" stack>
        <JourneyAxis />
        <ol className="cps">
          {checkpoints.map((checkpoint) => (
            <Row
              as="li"
              key={checkpoint.date}
              className="cp"
              data-status={checkpoint.status}
              meta={
                <>
                  <time className="cp-date" dateTime={checkpoint.date}>
                    {checkpoint.date}
                  </time>
                  <span className="cp-status">
                    {statusLabels[checkpoint.status]}
                  </span>
                </>
              }
            >
              <ul className="cp-items">
                {checkpoint.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Row>
          ))}
        </ol>
      </Section>

      <Section label="Learning">
        <dl className="learn">
          {learning.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Rules" stack>
        <ol className="rules">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </Section>

      <Section label="Log" stack>
        <EntryList articles={articles} />
      </Section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles({ sections: ['research'] })).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}
