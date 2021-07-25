import { GITHUB_PATH, NAME } from '../lib/constants'

export default function Footer(): JSX.Element | null {
  return (
    <footer className="p-20 border-t flex bg-black">
      <div className="text-gray-300 text-center flex-auto">
        Built by
        <a 
          href={`${GITHUB_PATH}`}
          className="hover:text-white"
        >
          {` ${NAME}`}
        </a>
      </div>
    </footer>
  )
}
