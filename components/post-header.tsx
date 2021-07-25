import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({
  id,
  title,
  coverImage,
  date,
  author
}: {
  id: string
  title: string,
  coverImage: string,
  date: string,
  author: string,
}): JSX.Element | null {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} id={id} height={820} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg lightText">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}