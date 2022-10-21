import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'
import codeFrontmatter from 'remark-code-frontmatter'
import remarkToc from 'remark-toc'


export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(remarkToc).use(remarkGfm).process(markdown)
  return result.toString()
}
