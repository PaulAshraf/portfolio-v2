import Link from 'next/link'
import clsx from 'clsx'

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        passHref
        className="group flex text-sm font-medium text-slate-800 transition hover:text-indigo-500 dark:text-slate-200 dark:hover:text-indigo-500"
      >
        <Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
