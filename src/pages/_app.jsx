import { useState } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

// Remembers the previous value across renders without reading a ref during
// render: https://react.dev/reference/react/useState#storing-information-from-previous-renders
function usePrevious(value) {
  let [state, setState] = useState({ current: value, previous: undefined })

  if (state.current !== value) {
    setState({ current: value, previous: state.current })
  }

  return state.previous
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
