'use client';
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const arrayItems = [
  { label: 'Home', href: '/', },
  { label: 'Companins', href: '/companins', },
  { label: 'My Journey', href: '/my-journey', },
  { label: 'Home1', href: '/', },
]

const Navitems = () => {
  const pathname = usePathname();

  console.log('pathname?????', pathname)
  return (
    <nav className="flex items-center gap-4 ">
      {arrayItems.map(e => (
        <Link
          href={e.href} key={`app-main-vaebar-${e.href}-${e.label}`}
          className={cn(pathname === e.href && 'text-primary font-semibold')}
        >
          {e.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navitems