import { BriefcaseIcon, ArrowDownIcon } from '@/components/icons'
import Image from 'next/future/image'
import { Button } from '@/components/Button'

import coursera from '@/images/logos/coursera.png'
import crowd from '@/images/logos/crowd2.png'
import zammit from '@/images/logos/zammit.png'
import procore from '@/images/logos/procore.png'
import inesc from '@/images/logos/inesc2.png'
import callvita from '@/images/logos/callvita.png'

function Resume() {
  let resume = [
    {
      company: 'Procore',
      title: 'Senior Software Engineer',
      logo: procore,
      start: 'Feb 2024',
      end: 'Present',
    },
    {
      company: 'Zammit',
      title: 'Lead Software Engineer',
      logo: zammit,
      start: 'Mar 2022',
      end: 'Present',
    },
    {
      company: 'Zammit',
      title: 'Software Engineer',
      logo: zammit,
      start: 'Aug 2021',
      end: 'Mar 2022',
    },
    {
      company: 'Crowd Analyzer',
      title: 'Software Engineer',
      logo: crowd,
      start: 'Mar 2021',
      end: 'Aug 2021',
    },
    {
      company: 'Callvita',
      title: 'Software Engineer',
      logo: callvita,
      start: 'Nov 2020',
      end: 'Mar 2021',
    },
    {
      company: 'Coursera',
      title: 'Web Development Instructor',
      logo: coursera,
      start: 'Aug 2020',
      end: 'Jan 2021',
    },
    {
      company: 'INESC, University of Porto',
      title: 'Research Assistant',
      logo: inesc,
      start: 'Jul 20219',
      end: 'Sep 2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-slate-900 dark:text-slate-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-slate-500 dark:text-slate-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-slate-400 dark:text-slate-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="paul_ashraf_cv.pdf"
        variant="secondary"
        className="group mt-6 w-full"
        target="_blank"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-slate-400 transition group-active:stroke-slate-600 dark:group-hover:stroke-slate-50 dark:group-active:stroke-slate-50" />
      </Button>
    </div>
  )
}

export default Resume
