import Head from 'next/head'

const DEFAULT_DESCRIPTION =
  "I'm Paul, an AI-native software engineer working toward AI safety research, and writing about it in public."

export default function CustomHead({
  title,
  description = DEFAULT_DESCRIPTION,
}) {
  return (
    <Head>
      <title>{`${title} - Paul Ashraf`}</title>
      <meta name="description" content={description} />
    </Head>
  )
}
