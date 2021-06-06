import Head from 'next/head'
import Link from 'next/link'
import DateFormatter from '../components/date-formatter'
import Layout from '../components/layout'
import Container from '../components/container'
import Intro from '../components/intro'
import HeroPost from '../components/hero-post'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import { SITE_TITLE } from '../lib/constants'

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    coverImage: string
    id: string
    excerpt: string
  }[]
}) {
  const heroPost = allPostsData[0];
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost 
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            id={heroPost.id}
            excerpt={heroPost.excerpt}
          />
        )}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <DateFormatter dateString={date} />
                </small>
              </li>
            ))
            }
          </ul>
        </section>
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