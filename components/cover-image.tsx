import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, id, height, width }) {
    const image = (
        <Image
            priority 
            src={src}
            className={cn('shadow-sm', {
                'hover:shadow-md transition-shadow duration-200': id,
            })}
            layout="responsive"
            height={height}
            width={width}
            alt={`Cover Image for ${title}`}
        />
    )
    return (
        <div className="sm:mx-0">
            {id ? (
                <Link href={`/posts/${id}`}>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    )
}