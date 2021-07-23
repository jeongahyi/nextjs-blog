import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 pb-20 md:gap-y-32 mb-22">
        {posts && posts.map((post) => (
          <PostPreview 
            key={post.id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.createdDate}
            id={post.id}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}