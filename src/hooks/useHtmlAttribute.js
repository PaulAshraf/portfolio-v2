import { useSyncExternalStore } from 'react'

function subscribe(callback) {
  let observer = new MutationObserver(callback)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class', 'data-design'],
  })
  return () => observer.disconnect()
}

export function useIsDark() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains('dark'),
    () => false
  )
}

export function useDesignAttribute(fallback) {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.design ?? fallback,
    () => fallback
  )
}
