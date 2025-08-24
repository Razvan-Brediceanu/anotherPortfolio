import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

/**
 * @param {{ current: HTMLElement|null }} refTab - ref to the tab section DOM node
 * @param {{ current: HTMLElement[]|NodeList|null }} refList - ref to list of animated nodes
 * @param {string} tabId - stable id for this tab (e.g., 'home', 'about') that matches activeTab in the store
 */
const useSmartScroll = (refTab = null, refList = null, tabId = '') => {
  const activeTab = useSelector((state) => state.activeTab)
  const hasScrolledForThisTab = useRef(false)

  // Scroll the active tab into view (only if not already visible)
  useEffect(() => {
    const el = refTab?.current
    if (!el) return

    const isActive = activeTab === tabId
    if (!isActive) {
      hasScrolledForThisTab.current = false
      return
    }

    // Avoid repeated scrollIntoView calls for the same active tab
    if (hasScrolledForThisTab.current) return

    const rect = el.getBoundingClientRect()
    const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight

    if (!fullyVisible) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }

    hasScrolledForThisTab.current = true
  }, [activeTab, refTab, tabId])

  // Animate items on scroll (mount once)
  useEffect(() => {
    const list = refList?.current
    if (!list || !list.length) return

    // Ensure it's iterable (handles NodeList or array)
    const items = Array.from(list)

    items.forEach((div) => div.classList.add('animation'))

    const handleScroll = () => {
      const scrollY = window.scrollY
      const triggerY = scrollY + window.innerHeight * (2 / 3) // 66% viewport

      items.forEach((div) => {
        const rect = div.getBoundingClientRect()
        const absoluteTop = rect.top + scrollY // stable doc position
        if (triggerY >= absoluteTop) {
          div.classList.add('active')
        } else {
          div.classList.remove('active')
        }
      })
    }

    // Run once so elements above the fold get activated
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [refList])
}

export default useSmartScroll
