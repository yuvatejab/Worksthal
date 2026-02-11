'use client'

import { usePathname } from 'next/navigation'
import { PageNav } from './page-nav'

export function PageNavWrapper() {
  const pathname = usePathname()
  
  // Don't show on homepage
  if (pathname === '/') {
    return null
  }
  
  return (
    <PageNav 
      tabs={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  )
}
