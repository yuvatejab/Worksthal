'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useRouter, usePathname } from 'next/navigation'

interface NavTab {
  label: string
  href: string
}

interface PageNavProps {
  tabs: NavTab[]
}

export const PageNav: React.FC<PageNavProps> = ({ tabs }) => {
  const router = useRouter()
  const pathname = usePathname()
  const fired = useRef(false)
  
  // Find the index of the current tab based on the path
  const defaultSelectedTabIndex = tabs.findIndex(tab => pathname === tab.href || pathname.startsWith(tab.href + '/')) ?? 0
  
  const [currentLink, setCurrentLink] = useState<{
    index: number
    left: undefined | number
    width: undefined | number
  }>({
    index: defaultSelectedTabIndex,
    left: undefined,
    width: undefined
  })

  /**
   * TailwindCSS scans your codebase and based on that generates styles
   * TailwindCSS does not allow to concatenate class names, so just wrote down all possible combinations
   */
  const defaultSelectedTabStyles = [
    '[&:nth-child(1)]:bg-zinc-900 [&:nth-child(1)]:dark:bg-zinc-100',
    '[&:nth-child(2)]:bg-zinc-900 [&:nth-child(2)]:dark:bg-zinc-100',
    '[&:nth-child(3)]:bg-zinc-900 [&:nth-child(3)]:dark:bg-zinc-100',
    '[&:nth-child(4)]:bg-zinc-900 [&:nth-child(4)]:dark:bg-zinc-100',
    '[&:nth-child(5)]:bg-zinc-900 [&:nth-child(5)]:dark:bg-zinc-100',
    '[&:nth-child(6)]:bg-zinc-900 [&:nth-child(6)]:dark:bg-zinc-100',
    '[&:nth-child(7)]:bg-zinc-900 [&:nth-child(7)]:dark:bg-zinc-100',
    '[&:nth-child(8)]:bg-zinc-900 [&:nth-child(8)]:dark:bg-zinc-100'
  ]

  useEffect(() => {
    setCurrentLink(() => ({
      left: document.getElementById('page-nav-btn-' + defaultSelectedTabIndex)?.offsetLeft,
      width: document.getElementById('page-nav-btn-' + defaultSelectedTabIndex)?.getBoundingClientRect()
        .width,
      index: defaultSelectedTabIndex
    }))
  }, [defaultSelectedTabIndex])

  const handleTabClick = (i: number, href: string) => {
    fired.current = true
    setCurrentLink(() => ({
      left: document.getElementById('page-nav-btn-' + i)?.offsetLeft,
      width: document.getElementById('page-nav-btn-' + i)?.getBoundingClientRect().width,
      index: i
    }))
    router.push(href)
  }

  return (
    <div
      className={
        'fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit border border-zinc-300/60 dark:border-zinc-700/40 rounded-full flex gap-2 items-center justify-center p-2 backdrop-blur-xl bg-white/90 dark:bg-zinc-950/90 shadow-lg'
      }
    >
      {tabs.map((tab, i) => (
        <button
          key={i}
          id={'page-nav-btn-' + i}
          onClick={() => handleTabClick(i, tab.href)}
          className={twMerge(
            'transition-colors duration-200 flex items-center justify-center rounded-full h-fit px-4 py-2 text-nowrap text-sm font-medium',
            currentLink.index === i 
              ? 'text-zinc-100 dark:text-zinc-900' 
              : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100',
            fired.current ? '' : defaultSelectedTabStyles[defaultSelectedTabIndex]
          )}
        >
          {tab.label}
        </button>
      ))}
      <div className={'absolute inset-0 h-full p-2 -z-[1] overflow-hidden pointer-events-none'}>
        <div className={'relative h-full w-full overflow-hidden'}>
          <div
            style={{
              left: `calc(${currentLink.left || 0}px - 0.5rem)`,
              width: `${currentLink.width || 0}px`
            }}
            className={twMerge(
              `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]`,
              fired.current ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-transparent'
            )}
          />
        </div>
      </div>
    </div>
  )
}
