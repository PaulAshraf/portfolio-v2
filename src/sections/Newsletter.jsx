import { Computer } from '@/components/icons'
import { Button } from '@/components/Button'
import { SocialLink } from '@/components/SocialLink'
import { links } from '@/lib/links'
import { LinkedInIcon } from '@/components/SocialIcons'
import { AlternateMailIcon as MailIcon } from '@/components/icons'

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40"
    >
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <Computer className="h-6 w-6 flex-none" />
        <span className="ml-3">{"Let's Collaborate"}</span>
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Reach out on LinkedIn or email and let&apos;s work together!
      </p>
      <div className="mt-5 flex-col">
        {/* <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-slate-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-slate-800/5 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-700/[0.15] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button> */}
        <SocialLink href={links.linkedin} icon={LinkedInIcon} className="mb-2">
          DM me on LinkedIn
        </SocialLink>
        <SocialLink
          href={`mailto:${links.mail}?subject=Collaborationx`}
          icon={MailIcon}
        >
          Email me on {links.mail}
        </SocialLink>
      </div>
    </form>
  )
}

export default Newsletter
