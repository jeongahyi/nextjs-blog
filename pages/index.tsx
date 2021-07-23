import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Intro from '../components/intro'
import HeroPost from '../components/hero-post'
import MoreStories from '../components/more-stories'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import { SITE_TITLE } from '../lib/constants'

export default function Home({ allPostsData }: {
  allPostsData: {
    createdDate: string
    title: string
    coverImage: string
    id: string
    excerpt: string
  }[]
}) {
  const heroPost = allPostsData[0]
  const morePosts = allPostsData.slice(1, allPostsData.length)
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <Container>
        <Intro />
        <div className="m-0.1 md:pt-10 md:p-10 shadow-md bg-white">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.createdDate}
              id={heroPost.id}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}