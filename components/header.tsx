import Link from 'next/link'
import Image from 'next/image'
import { NAME, SITE_TITLE } from '../lib/constants'

export default function Header() {
  return (
    <header className="p-2 grid place-items-center">
      <Image
        priority
        src="/images/profile.jpg"
        className="rounded-full"
        height={108}
        width={108}
        alt={NAME}
      />
      <h2 className="text-2xl md:text-4xl font-bold tracking-tighter md:tracking-tighter leading-tight mb-20">
        <Link href="/">
          <a className="hover:underline">{SITE_TITLE}</a>
        </Link>
      </h2>
    </header>
  )
}