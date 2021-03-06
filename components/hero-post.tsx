import Link from 'next/link'
import CoverImage from '../components/cover-image'
import DateFormatter from '../components/date-formatter'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  id,
}: {  
  title: string,
  coverImage: string,
  date: string,
  excerpt: string,
  id: string
}): JSX.Element | null {
  return (
    <section>
      <div className="mb-5 md:mb-10">
        <CoverImage
          title={title}
          src={coverImage}
          id={id}
          height={820}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mx-5 md:mx-0 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-3xl lg:text-5xl leading-tight">
            <Link as={`/posts/${id}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}