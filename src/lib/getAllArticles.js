import glob from 'fast-glob'
import * as path from 'path'

// Every post's `meta.section` is one of:
//   research   -> AI safety research posts (/blog)
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

  // Entry number across the whole log, oldest post = 1.
  articles
    .sort((a, z) => new Date(a.date) - new Date(z.date))
    .forEach((article, index) => {
      article.no = index + 1
    })

  if (sections) {
    articles = articles.filter((article) => sections.includes(article.section))
  }

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
