import Link from 'next/link'
import Image from 'next/image'
import { NAME, SITE_TITLE } from '../lib/constants'

export default function Header(): JSX.Element | null {
  return (
    <header className="p-2 flex bg-white sm:bg-gray-100 place-items-center">
      <Image
        priority
        src="/images/wink_icon.svg"
        className="flex-auto rounded-full"
        height={50}
        width={50}
        alt={NAME}
      />
      <h2 className="flex-auto text-1xl md:text-2xl font-bold tracking-tighter md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">{SITE_TITLE}</a>
        </Link>
      </h2>
    </header>
  )
}