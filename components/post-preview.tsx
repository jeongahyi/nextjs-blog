import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  id,
  title,
  coverImage,
  date,
  excerpt
}: {
  id: string
  title: string,
  coverImage: string,
  date: string,
  excerpt: string,
}): JSX.Element | null {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          id={id}
          title={title}
          src={coverImage}
          height={328}
          width={556}
        />
      </div>
      <div className="mx-5 md:mx-0">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${id}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  )
}