import Head from 'next/head'
import TeamShowcase from '../components/TeamShowcase'

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team ASTRA</title>
        <meta name="description" content="Meet the talented individuals behind our success." />
      </Head>
      <TeamShowcase />
    </>
  )
}