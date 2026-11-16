import glob from 'fast-glob'
import * as path from 'path'

// Every post's `meta.section` is one of:
//   research   -> the Engineer -> AI Researcher journey (/journey, also in /blog)
//   technology -> general engineering posts (/blog)
//   film       -> movie reviews (/films only)

// Sections that make up the main tech blog feed.
export const TECH_SECTIONS = ['research', 'technology']

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/blog/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles({ sections } = {}) {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blog'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  if (sections) {
    articles = articles.filter((article) => sections.includes(article.section))
  }

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
