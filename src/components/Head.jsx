import Head from 'next/head'

export default function CustomHead({ title }) {
  return (
    <Head>
      <title>{title} - Paul Ashraf</title>
      <meta
        name="description"
        content="I'm Paul, a software engineer based in Cairo."
      />
    </Head>
  )
}
