import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import Container from '../../components/container'
import PostHeader from '../../components/post-header'
import PostBody from '../../components/post-body'

export default function Post({ postData }: {
  postData: {
    title: string
    coverImage: string
    id: string
    createdDate: string
    author: string
    contentHtml: string
  }
}): JSX.Element | null {
  return (
    <Layout>
      <Container>
        <article className="mb-32">
          <Head>
            <title>{postData.title}</title>
          </Head>
          <PostHeader
            title={postData.title}
            coverImage={postData.coverImage}
            id={postData.id}
            date={postData.createdDate}
            author={postData.author}
          />
          <PostBody content={postData.contentHtml} />
        </article>
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}