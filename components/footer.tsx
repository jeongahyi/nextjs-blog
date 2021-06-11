import { GITHUB_PATH, NAME } from '../lib/constants'

export default function Footer() {
    return (
        <footer className="p-20 border-t flex">
            <div className="text-gray-500 text-center flex-auto">
                Built by
                <a 
                href={`${GITHUB_PATH}`}
                className="text-gray-600 hover:text-black"
                >
                {` ${NAME}`}
                </a>
            </div>
        </footer>
    )
}
