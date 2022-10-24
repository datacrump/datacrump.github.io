import { remark } from 'remark'
import html from 'remark-html'
import codeFrontmatter from 'remark-code-frontmatter'
import remarkToc from 'remark-toc'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'


export default async function markdownToHtml(markdown: string) {
    
  const result = await remark().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeHighlight).use(rehypeStringify).process(markdown)
  // const result = await remark().use(html).use(remarkToc).use(remarkGfm).process(markdown)
  return result.toString()
}
